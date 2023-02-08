import Layout from '@/components/layout';
import '@/styles/about/brudowitz2021.css';
import '@/styles/about/icosta2021.css';
import '@/styles/about/jbadalcampbe2020.css';
import '@/styles/about/sluongo2022.css';
import '@/styles/about/sshank2018.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
