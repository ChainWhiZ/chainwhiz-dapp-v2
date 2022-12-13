import React from 'react';
import Head from 'next/head';
import Navbar from 'components/navbar';
import ActiveView from '__pages__/activebounties';

export default function Sample() {
  //perform component level transformations and pass th eprops to the sample view

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="chainwhiz home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ActiveView />
    </>
  );
}
