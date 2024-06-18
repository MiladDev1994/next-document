// import withBundleAnalyzer from "@next/bundle-analyzer"
import withPWAInit from "@ducanh2912/next-pwa";


// const bundleAnalyzer = withBundleAnalyzer({
//     enabled: process.env.ANALYZE === 'true',
// })

const withPWA = withPWAInit({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: "public",
    fallbacks: {
      //image: "/static/images/fallback.png",
      document: "/offline", // if you want to fallback to a custom page rather than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
    workboxOptions: {
      disableDevLogs: true,
    },
    // ... other options you like
  });


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // reactStrictMode: true
  

};

// export default bundleAnalyzer(nextConfig);
export default withPWA(nextConfig);
