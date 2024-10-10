/** @type {import('next').NextConfig} */
import nextra from 'nextra';

const nextConfig = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
};

const prodConfig = {
  ...nextConfig,
  output: 'export',
  images: {
    unoptimized: true,
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

export default withNextra(isDev() ? nextConfig : prodConfig);
