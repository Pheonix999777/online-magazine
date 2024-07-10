// next.config.js
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/app/sass")],
    prependData: `@import "mixins.scss"; @import "veriables.scss";`,
  },
};

export default nextConfig;
