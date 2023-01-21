import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="w-full">
      <Head>
        <meta name="application-name" content="Tiramisu" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tiramisu" />
        <meta name="description" content="Tiramisu Split Bill and Receipt Maker" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#4406CB" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#4406CB" />

        <link rel="apple-touch-icon" href="/cake-slice-192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/cake-slice-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/cake-slice-180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/cake-slice-167.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/cake-slice-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/cake-slice-16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4406CB" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="Tiramisu | Split Bill and Receipt Maker" />
        <meta
          name="twitter:description"
          content="No hassle split-bill app, also serves as an invoice/receipt maker~"
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@asfio_wilma" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tiramisu" />
        <meta
          property="og:description"
          content="No hassle split-bill app, also serves as an invoice/receipt maker~"
        />
        <meta property="og:site_name" content="Tiramisu | Split Bill and Receipt Maker" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
