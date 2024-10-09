import { TriangleAlert } from 'lucide-react';
import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();
    const image = 'https://jubilant-barnacle-7kplgwg.pages.github.io/og.jpeg';

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
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
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
    hue: 81,
    saturation: 50,
  },
  project: {
    link: 'https://github.com/paxch/poc_branching-versioning-strategy',
  },
  navigation: true,
  banner: {
    dismissible: false,
    key: 'prerelease-warning',
    content: (
      <div className="flex flex-row items-center justify-center">
        <TriangleAlert color="orange" />
        <span className="block ml-2">Dokumentation nicht final</span>
      </div>
    ),
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
};

export default config;
