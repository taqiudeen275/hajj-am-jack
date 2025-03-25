import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
  
      {
        protocol: 'https',
        hostname: 'poll-pulse.pockethost.io',
        port: '',
        pathname: '/api/files/**',
      },
    ],
  },
};

export default nextConfig;
