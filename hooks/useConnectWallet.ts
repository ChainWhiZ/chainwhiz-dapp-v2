import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'utils';
import { IS_DEV } from 'utils/utilities';
import useEagerConnect from './useEagerConnect';
import { useInactiveListener } from './useInactiveListener';

export default function useConnectWallet() {
  const { connector, activate, error, active } = useWeb3React();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] =
    useState<typeof injected>();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    if (!error) return;
    let message;
    if (error.name === 'UnsupportedChainIdError') {
      message = `Unsupported network, please connect to the ${
        IS_DEV ? 'polygon test' : 'polygon'
      } network`;
    } else {
      message = error.message;
    }
    // TODO change the console.log to a global visual logger
    console.log({ message });
    // alert(message);
  }, [error]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);
  // the event handler for when we want to connect to metamask
  const connectWalletPressed = () => {
    if (active) return;
    setActivatingConnector(injected);
    activate(injected);
  };

  return { connectWalletPressed };
}
