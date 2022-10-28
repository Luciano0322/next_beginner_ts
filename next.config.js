/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.pokemondb.net"],
    loader: "custom",
    path: "/",
  }
}

module.exports = nextConfig
