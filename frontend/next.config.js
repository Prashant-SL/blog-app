/** @type {import('next').NextConfig} */

module.exports = () => {
  return {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    images: {
      domains: ["flowbite.com", "via.placeholder.com", "placeholder.com"],
    },
  };
};
