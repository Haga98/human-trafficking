/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
const nextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export",
  reactStrictMode: true,
  basePath: '/human-trafficking',
  images: {
    unoptimized: envImageUnoptimize,
  },
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig
