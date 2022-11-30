import React from 'react';
import Head from 'next/head';
import Navbar from 'components/navbar';
import ExplorePage from '__pages__/explore';

export default function Explore() {
  //perform component level transformations and pass th eprops to the sample view

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="chainwhiz home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <ExplorePage />
    </>
  );
}