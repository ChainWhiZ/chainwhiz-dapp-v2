import React from "react";
import Head from "next/head";
import SampleView from "__pages__/sample";

export default function Sample() {
  //perform component level transformations and pass th eprops to the sample view

  return (
    <div>
      <Head>
        <title>Chainwhiz sample</title>
        <meta name="description" content="chainwhiz sample page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SampleView />
    </div>
  );
}
