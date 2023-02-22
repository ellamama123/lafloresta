import { NextPage } from 'next';
import Head from 'next/head';

import PageHeader from '../shared/components/PageHeader';

const Collections: NextPage = () => {
  return (
    <>
      <Head>
        <title>La Floresta</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <PageHeader title="Bộ sưu tập" />
      </section>
    </>
  );
};

export default Collections;
