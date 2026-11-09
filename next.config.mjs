/** @type {import('next').NextConfig} */
const nextConfig = {
  // cashouthq.com was the domain until 2026-09-10; every old link — the
  // privacy URL in shipped builds, invites already sent — lands on the new
  // one. The association file is exempt so old builds keep their universal
  // links.
  async redirects() {
    return [
      {
        source: "/:path((?!\\.well-known).*)",
        has: [{ type: "host", value: "cashouthq.com" }],
        destination: "https://voidbetfree.com/:path",
        permanent: true,
      },
      {
        source: "/:path((?!\\.well-known).*)",
        has: [{ type: "host", value: "www.cashouthq.com" }],
        destination: "https://voidbetfree.com/:path",
        permanent: true,
      },
    ];
  },
  // Apple reads this file to open https://voidbetfree.com/crew/* in the app
  // (universal links). It must be served as JSON, with no redirect.
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
