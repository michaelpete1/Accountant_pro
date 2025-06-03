// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  

  webpack(config, { dev, isServer }) {
    // Optional: Disable runtimeChunk to potentially fix CSS HMR error
    if (dev && !isServer) {
      config.optimization.runtimeChunk = false;
    }

    return config;
  },
};

export default nextConfig;
