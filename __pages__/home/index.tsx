// import { useWeb3React } from '@web3-react/core';
// import useConnectWallet from 'hooks/useConnectWallet';

// import all segments
import Hero from './segments/hero';
import Partners from './segments/partners';
import TorchBearer from './segments/torchbearer';
import Stats from './segments/stats';
import Community from './segments/community';
import Category from './segments/category';

// import all segments
import styles from './home.module.scss';

export default function Sample() {
  //   const { connectWalletPressed } = useConnectWallet();
  //   const { account } = useWeb3React();

  return (
    <div className={styles.home}>
      <Hero />
      <Partners />
      <TorchBearer />
      <Stats />
      <Community />
      <Category />
    </div>
  );
}
