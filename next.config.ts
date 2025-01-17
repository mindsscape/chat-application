// import type { NextConfig } from "next";
// import type { Configuration } from "webpack";

// const nextConfig: NextConfig = {
//   experimental: {
//     ppr: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "avatar.vercel.sh",
//         pathname: "/**",
//       },
//     ],
//   },
//   webpack: (config: Configuration) => {
//     // Disable minification temporarily to avoid Unicode errors
//     config.optimization = {
//       ...config.optimization,
//       minimize: false,
//     };
//     return config;
//   },
// };

import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  // Add this line for static export
  experimental: {
    ppr: true,
  },
  images: {
    unoptimized: true, // Add this for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        pathname: "/**",
      },
    ],
  },
  webpack: (config: Configuration) => {
    // Disable minification temporarily to avoid Unicode errors
    config.optimization = {
      ...config.optimization,
      minimize: false,
    };
    return config;
  },
};

export default nextConfig;

// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   experimental: {
//     ppr: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         hostname: 'avatar.vercel.sh',
//       },
//     ],
//   },
// };

// export default nextConfig;
