import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/', 
        destination: '/auth/login', 
        permanent: true, 
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
