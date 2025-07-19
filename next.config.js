/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // evita errores si usas <img src="/slide1.jpg" />
  },
};

module.exports = nextConfig;
