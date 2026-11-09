'use client';

import { useEffect } from 'react';

// The invite landing tries the app first. On a phone with Void installed a
// universal link never reaches this page at all (iOS opens the app); this is
// the fallback for a copied link opened in a browser, or a phone without the
// app — try the scheme, and leave the buttons for what happens next.
export function OpenInVoid({ code }: { code: string }) {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.href = `cashout://crew/join?code=${code}`;
    }, 300);
    return () => clearTimeout(t);
  }, [code]);
  return null;
}
