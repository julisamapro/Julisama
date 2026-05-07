/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/a-propos',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/a-propos/',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/cgv/',
        destination: '/cgv',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;