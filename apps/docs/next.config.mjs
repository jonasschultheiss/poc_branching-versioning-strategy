/** @type {import('next').NextConfig} */
import nextra from 'nextra';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  distDir: 'dist',
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

function isDev() {
  return process?.env?.NODE_ENV === 'development';
}

console.log('🚀 ~ isNotDev():', isDev());

export default withNextra(!isDev && nextConfig);
