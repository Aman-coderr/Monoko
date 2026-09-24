/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-efab5b3be1fd427297b4a94107b488d3.r2.dev",
      },
    ],
  },
};


export default nextConfig;
