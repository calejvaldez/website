import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "gravatar.com" },
      { protocol: "https", hostname: "ojosproject.org" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "cdn.discordapp.com" },
    ],
  },
};

export default nextConfig;
