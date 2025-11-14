import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "gi.esmplus.com",
      "firebasestorage.googleapis.com",
      "storage.googleapis.com",
    ],
  },
};

export default nextConfig;
