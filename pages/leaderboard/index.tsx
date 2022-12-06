import React from 'react';
import Head from 'next/head';
import Leaderboard from '__pages__/leaderboard';
import Navbar from 'components/navbar';

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
      <Leaderboard />
    </>
  );
}
