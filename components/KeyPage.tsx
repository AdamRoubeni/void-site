"use client";

import { useCallback, useEffect, useState } from "react";

import { rpc } from "@/lib/supabasePublic";

// THE KEY PAGE (2026-10-05). The one link a person sends when Void blocks
// their betting apps. Whoever opens it first holds the key: the page claims
// it with a secret kept in this browser, and every later open without that
// secret sees "held", not the code.
//
// Two codes live here and nowhere the person can reach: the key code (typed
// into Void to unblock) and the Screen Time passcode (the iOS setting that
// stops Void being deleted). "Give it back" is the other door — it turns
// blocking off the next time they open Void.

type Page =
  | { found: false }
  | { found: true; revoked: true; first_name: string | null; holder_name: string }
  | { found: true; held: true; first_name: string | null; holder_name: string; viewed_at: string }
  | {
      found: true;
      secret: string;
      first_name: string | null;
      holder_name: string;
      code: string;
      screen_time_code: string;
      created_at: string;
      sent_at: string | null;
      requested_at: string | null;
      released_at: string | null;
    };

function storageKey(token: string) {
  return `void-key-${token}`;
}

function readSecret(token: string): string | null {
  try {
    return window.localStorage.getItem(storageKey(token));
  } catch {
    return null;
  }
}

function writeSecret(token: string, secret: string) {
  try {
    window.localStorage.setItem(storageKey(token), secret);
  } catch {
    // Private mode: the page still works for this visit.
  }
}

function when(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export function KeyPage({ token }: { token: string }) {
  const [page, setPage] = useState<Page | null>(null);
  const [error, setError] = useState(false);
  // Before claiming: the person who sent the link may have tapped it
  // themselves. One deliberate tap is what claims it.
  const [claimed, setClaimed] = useState<boolean>(() => (typeof window !== "undefined" ? !!readSecret(token) : false));
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const secret = readSecret(token);
      const p = await rpc<Page>("keyholder_page", { p_token: token, p_secret: secret });
      if (p.found && "secret" in p && p.secret) writeSecret(token, p.secret);
      setPage(p);
    } catch {
      setError(true);
    }
  }, [token]);

  useEffect(() => {
    if (claimed) void load();
    // Not claimed yet: ask the server nothing — a status read would claim it.
  }, [claimed, load]);

  // While holding it, keep an eye out for "asked for it back".
  useEffect(() => {
    if (!claimed) return;
    const t = setInterval(() => void load(), 30000);
    return () => clearInterval(t);
  }, [claimed, load]);

  const giveBack = async () => {
    const secret = readSecret(token);
    if (!secret) return;
    setBusy(true);
    try {
      await rpc("keyholder_release", { p_token: token, p_secret: secret });
      await load();
    } catch {
      setError(true);
    }
    setBusy(false);
    setConfirming(false);
  };

  const eyebrow = <p className="text-sm uppercase tracking-[0.2em] text-dim">Void key</p>;

  if (!claimed) {
    return (
      <>
        {eyebrow}
        <h1 className="mt-4 text-3xl font-semibold">Someone gave you their key.</h1>
        <p className="mt-4 leading-relaxed text-dim">
          They blocked their betting apps with Void. This link is the only thing that can unblock
          them, and it is yours to hold — not theirs. Open it only if that someone is you.
        </p>
        <button
          onClick={() => setClaimed(true)}
          className="mt-10 rounded-full bg-white px-6 py-3 font-semibold text-black"
        >
          I&apos;m holding it
        </button>
      </>
    );
  }

  if (error) {
    return (
      <>
        {eyebrow}
        <h1 className="mt-4 text-3xl font-semibold">Couldn&apos;t load the key.</h1>
        <p className="mt-4 leading-relaxed text-dim">Check your connection and open the link again.</p>
      </>
    );
  }

  if (!page) {
    return (
      <>
        {eyebrow}
        <p className="mt-4 text-dim">Opening…</p>
      </>
    );
  }

  if (!page.found) {
    return (
      <>
        {eyebrow}
        <h1 className="mt-4 text-3xl font-semibold">This link isn&apos;t a key.</h1>
        <p className="mt-4 leading-relaxed text-dim">Ask them to send it again from Void.</p>
      </>
    );
  }

  const first = page.first_name?.trim() || "They";
  const their = page.first_name?.trim() ? `${page.first_name.trim()}’s` : "their";

  if ("revoked" in page && page.revoked) {
    return (
      <>
        {eyebrow}
        <h1 className="mt-4 text-3xl font-semibold">This key was replaced.</h1>
        <p className="mt-4 leading-relaxed text-dim">{first} made a new one. This link no longer opens anything.</p>
      </>
    );
  }

  if ("held" in page && page.held) {
    return (
      <>
        {eyebrow}
        <h1 className="mt-4 text-3xl font-semibold">{page.holder_name} already holds this key.</h1>
        <p className="mt-4 leading-relaxed text-dim">
          It was opened {when(page.viewed_at)}. A key is held in one place — if that was you on another
          device, open it there.
        </p>
      </>
    );
  }

  if (!("code" in page)) return null;

  return (
    <>
      {eyebrow}
      <h1 className="mt-4 text-3xl font-semibold">You&apos;re holding {their} key, {page.holder_name}.</h1>
      <p className="mt-4 leading-relaxed text-dim">
        {first} blocked their betting apps with Void and gave you the only way to unblock them. Keep
        it. If they ask for it back, that is the moment it matters most.
      </p>

      {page.released_at ? (
        <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
          <p className="font-semibold">You gave it back {when(page.released_at)}.</p>
          <p className="mt-2 text-sm leading-relaxed text-dim">
            Their apps unblock the next time they open Void. If they block them again, they&apos;ll
            send a new key.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-dim">Key code</p>
            <p className="mt-2 font-mono text-5xl tracking-[0.35em]">{page.code}</p>
            <p className="mt-3 text-sm leading-relaxed text-dim">
              Typed into Void, this turns blocking off. Don&apos;t send it. If you decide they should
              have it, read it to them — or use the button below.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-line bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-dim">Screen Time passcode</p>
            <p className="mt-2 font-mono text-5xl tracking-[0.35em]">{page.screen_time_code}</p>
            <p className="mt-3 text-sm leading-relaxed text-dim">
              The iPhone setting that stops Void being deleted. {first} typed it once and is not
              supposed to remember it. Same rule: keep it.
            </p>
          </div>

          {page.requested_at ? (
            <div className="mt-8 rounded-2xl border border-gold/40 p-6">
              <p className="font-semibold text-gold">{first} asked for it back {when(page.requested_at)}.</p>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                Talk to them first. An urge usually passes in the time it takes to call.
              </p>
            </div>
          ) : null}

          <div className="mt-10">
            {confirming ? (
              <div className="rounded-2xl border border-line p-6">
                <p className="font-semibold">Give the key back?</p>
                <p className="mt-2 text-sm leading-relaxed text-dim">
                  Their betting apps unblock the next time they open Void. This can&apos;t be undone
                  from here.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => void giveBack()}
                    disabled={busy}
                    className="rounded-full bg-white px-6 py-3 font-semibold text-black disabled:opacity-60"
                  >
                    {busy ? "Giving it back…" : "Yes, give it back"}
                  </button>
                  <button
                    onClick={() => setConfirming(false)}
                    className="rounded-full border border-line px-6 py-3 font-semibold"
                  >
                    Keep holding it
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setConfirming(true)}
                className="rounded-full border border-line px-6 py-3 font-semibold text-dim"
              >
                Give it back
              </button>
            )}
          </div>
        </>
      )}

      <p className="mt-12 text-xs leading-relaxed text-faint">
        This page is the key. Keep the link. Nothing here is sent to {first}, and Void never
        contacts you on their behalf.
      </p>
    </>
  );
}
