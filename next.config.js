/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true, // default true
   swcMinify: true,
   experimental: { appDir: true },

   env: {
      FTB_SUPPORTDESK_API: process.env.NEXT_PUBLIC_FTB_SUPPORTDESK_API,
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
   },
};

module.exports = nextConfig;
