import Layout from '@/components/layout';
import '@/styles/about/brudowitz2021.css';
import '@/styles/about/icosta2021.css';
import '@/styles/about/jbadalcampbe2020.css';
import '@/styles/about/sluongo2022.css';
import '@/styles/about/sshank2018.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3CFJWSDDF2%22%3E"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3CFJWSDDF2', {
page_path: window.location.pathname,
});
`,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
