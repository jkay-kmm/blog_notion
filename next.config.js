/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_BLOG_ID: process.env.NOTION_BLOG_ID,
    NOTION_TOKEN: process.env.NOTION_TOKEN,
  },
  images: {
    domains: ['pbs.twimg.com']
  }
}

module.exports = nextConfig