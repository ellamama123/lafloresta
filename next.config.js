/** @type {import('next').NextConfig} */
module.exports = {
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  reactStrictMode: true,
  images: {
    domains: ['testwpweb.site', 'testweb2.site', 'lafloresta.local', 'dummyimage.com'],
  },
};