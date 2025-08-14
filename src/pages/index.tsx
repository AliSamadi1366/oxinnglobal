import Head from 'next/head';

import { Base } from '../templates/Base';

export default function Home() {
  return (
    <>
      <Head>
        <title>OxingGlobal</title>
        <meta name="description" content="OxingGlobal — official website" />
      </Head>
      <Base />
    </>
  );
}
