import React from 'react';
import Head from 'next/head';
import ErrorPage from '__pages__/error';
import Navbar from 'components/navbar';

export default function Error() {
  //perform component level transformations and pass the props to the sample view

  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="error page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <ErrorPage />
    </>
  );
}