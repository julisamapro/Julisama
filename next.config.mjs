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
      // ANCIENNES PAGES STANDARDS
      { source: '/a-propos', destination: '/#about', permanent: true },
      { source: '/a-propos/', destination: '/#about', permanent: true },
      { source: '/cgv/', destination: '/cgv', permanent: true },

      // ANCIENS DÉTAILS DE PRESTATIONS WORDPRESS
      {
        source: '/details-investissement-meuble/:path*',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/details-rdv-coaching/:path*',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/details-immersion-deco/:path*',
        destination: '/#services',
        permanent: true,
      },

      // NETTOYAGE DES RECHERCHES WORDPRESS
      {
        source: '/:path*',
        has: [{ type: 'query', key: 's' }],
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;