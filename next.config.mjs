/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "./src/app/sass/_font-face.scss"; @import "./src/app/sass/_mixins.scss"; @import "./src/app/sass/_veriables.scss";`,
  },
};

export default nextConfig;
