/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // hostname: ['fiverr-res.cloudinary.com'],
      {
        protocol: 'https',
        hostname: 'w7.pngwing.com',
        pathname: '**',
      },
    ]
  }

}

export default nextConfig;