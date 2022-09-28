import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'utils/ethers';
import type { AppProps } from 'next/app';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
