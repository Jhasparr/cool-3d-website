import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  allowedDevOrigins: ['192.168.1.73'],

};

export default nextConfig;
