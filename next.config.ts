import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://eu.connect.panasonic.com/sites/default/files/styles/large/**")],
  },
};

export default nextConfig;
