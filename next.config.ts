// next.config.ts
import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

// ✅ Cast to any to bypass TS type check for experimental.turbo
const nextConfig: NextConfig & any = {
  reactStrictMode: true,
  experimental: {
    turbo: false, // disable Turbopack
  },
};

export default withPWA(nextConfig);