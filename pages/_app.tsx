import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'utils/ethers';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'styles/globals.scss';
import Navbar from 'components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
    </Web3ReactProvider>
  );
}

export default MyApp;
