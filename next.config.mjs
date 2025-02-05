/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,images: {
    domains: ['quocchic.net'],
  },
  async headers() {
    return [
      {
        // Allow HTTP requests for all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept, Content-Type' },
        ],
      },
    ]
  },
};

export default nextConfig;
