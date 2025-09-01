import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // TS doesn’t know this experimental key yet; hush the checker
    // @ts-expect-error experimental key not in stable typings yet
    allowedDevOrigins: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:3001",
      "http://192.168.1.229:3001",
    ],
  },
};

export default nextConfig;
