import Head from 'next/head';

export default function Header({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="OnlyTable!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
