import React from 'react';
import Head from 'next/head';
import PostBountyView from '__pages__/post';
import Navbar from 'components/navbar';

export default function Post() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="chainwhiz home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <PostBountyView />
    </>
  );
}
