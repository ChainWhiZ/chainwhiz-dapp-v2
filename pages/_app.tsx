import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Web3ReactProvider } from '@web3-react/core';

import theme from 'theme';
import { getLibrary } from 'utils/ethers';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.scss';
import { ToastProvider } from 'contexts/toastcontext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Component {...pageProps} />
          <ToastContainer /> 
        </Web3ReactProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default MyApp;
