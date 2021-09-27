import Head from 'next/head';

import Reopening from './Reopening';

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
        <title>Smartifit App</title>
      </Head>
      <section>
        <Reopening />
      </section>
    </main>
  );
}
