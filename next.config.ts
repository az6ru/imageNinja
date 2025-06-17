// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // ❗ `appDir` больше не нужен в Next.js 13.4+ (по умолчанию включён)
  // ❌ experimental: { appDir: true }
};

export default nextConfig;
