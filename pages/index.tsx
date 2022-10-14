import React from 'react';
import Head from 'next/head';
import HomeView from '__pages__/home';

export default function Sample() {
  //perform component level transformations and pass th eprops to the sample view

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="chainwhiz home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeView />
    </div>
  );
}
