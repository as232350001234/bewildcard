/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "bewildcard.com" },
      { protocol: "https", hostname: "assets.vercel.com" },
      { protocol: "https", hostname: "cdn-bewildcard.wildcard.com.cn" }
    ]
  }
};
export default nextConfig;
