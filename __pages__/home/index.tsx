// import { useWeb3React } from '@web3-react/core';
// import useConnectWallet from 'hooks/useConnectWallet';
import Hero from "./segments/hero";
import styles from './home.module.scss';

export default function Sample() {
//   const { connectWalletPressed } = useConnectWallet();
//   const { account } = useWeb3React();

  return (
    <div className={styles.home}>
        <Hero />
    </div>
  );
}
