import { useWeb3React } from '@web3-react/core';
import MobileMenu from './components/mobilemenu';
import RenderImage from 'components/image/renderimage';
import useConnectWallet from 'hooks/useConnectWallet';
import { formatAddress } from 'utils';

import { DownArrow, BellIcon } from './assets';
import styles from './navbar.module.scss';

export default function Navbar() {
  const { connectWalletPressed } = useConnectWallet();
  const { account, active } = useWeb3React();

  return (
    <section className={styles.navbar__wrapper}>
      <nav id={styles.navbar}>
        {/* menu logo */}
        <section>
          <RenderImage src="/images/logo.svg" alt="" />
        </section>

        <div>
          {/* menu items for large screens*/}
          <section className={styles.navbar__items}>
            <span id={styles.bounties}>
              Bounties <DownArrow />
            </span>
            <span id={styles.leaderboard}>Leaderboard</span>
            <span id={styles.notifications}>
              <BellIcon />
            </span>
            <button onClick={connectWalletPressed} id={styles.button}>
              {active && account ? formatAddress(account) : 'Connect wallet'}
            </button>
          </section>

          {/* menu items for  mobile menu items*/}
          <MobileMenu />
          {/* menu items for  mobile menu items*/}
        </div>
      </nav>
    </section>
  );
}
