import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'utils/ethers';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import Navbar from 'components/navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

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
