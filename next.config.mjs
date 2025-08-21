/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',              // ✅ single /til
  assetPrefix: '',           // ✅ if you're serving static files under /til
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
  experimental: {
    serverActions: {},
  },
};

export default nextConfig;
