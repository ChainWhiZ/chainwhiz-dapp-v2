import { useWeb3React } from '@web3-react/core';
import useConnectWallet from 'hooks/useconnectwallet';
import styles from './sample.module.scss';
import Segment1 from './segments/segment1';
import Segment2 from './segments/segment2';

export default function Sample() {
  const { connectWalletPressed } = useConnectWallet();
  const { account } = useWeb3React();

  return (
    <div className={styles.sample}>
      <button onClick={connectWalletPressed}>connect</button>
      {account}
      <Segment1 />
      <Segment2 />
    </div>
  );
}
