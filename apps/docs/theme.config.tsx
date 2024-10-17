import { TriangleAlert } from 'lucide-react';
import { useRouter } from 'nextra/hooks';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();
    const domain = 'jubilant-barnacle-7kplgwg.pages.github.io';
    const url = `https://${domain}`;
    const image = `${url}/og.jpeg`;

    const description = config.frontMatter.description || 'Make beautiful websites with Next.js & MDX.';
    const title = config.title + (route === '/' ? '' : ' - Nextra');

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content={domain} />
        <meta name="twitter:url" content={url} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-dark.png" type="image/png" media="(prefers-color-scheme: dark)" />
      </>
    );
  },
  logo: <span>PoC - branching & versioning @ B2C Sales</span>,
  color: {
    hue: 78,
    saturation: 70
  },
  project: {
    link: 'https://github.com/paxch/poc_branching-versioning-strategy'
  },
  navigation: true,
  banner: {
    dismissible: false,
    key: 'prerelease-warning',
    content: function useBanner() {
      const { locale } = useRouter();

      return (
        <div className="flex flex-row items-center justify-center">
          <TriangleAlert color="orange" />
          <span className="block ml-2">
            {locale === 'en' ? 'Documentation not final' : 'Dokumentation nicht final'}
          </span>
        </div>
      );
    }
  },
  docsRepositoryBase: 'https://github.com/paxch/poc_branching-versioning-strategy/blob/main/apps/docs',
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'de', name: 'Deutsch' }
  ]
};

export default config;
