import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: process.env.NODE_ENV === 'production',
    optimizePackageImports: [
      '@voluspalabs/ui/button',
      '@voluspalabs/ui/drawer',
      '@voluspalabs/ui/input',
      '@voluspalabs/ui/select',
      '@voluspalabs/ui/textarea',
    ],
  },
  images: {
    formats: ['image/avif'],
  },
}

export default nextConfig
