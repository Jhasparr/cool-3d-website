import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  allowedDevOrigins:  ['10.111.2.62'],

};

export default nextConfig;
