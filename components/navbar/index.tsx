import { useWeb3React } from '@web3-react/core';
import MobileMenu from './components/mobilemenu';
import RenderImage from 'components/image/renderimage';
import useConnectWallet from 'hooks/useConnectWallet';
import {useClickAway} from 'react-use';
import { formatAddress } from 'utils';
import Dropdown from './Dropdown';

import { DownArrow, BellIcon } from './assets';
import styles from './navbar.module.scss';
import { useRef, useState } from 'react';

export default function Navbar() {
  const { connectWalletPressed } = useConnectWallet();
  const { account, active } = useWeb3React();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => setMenuOpen((o) => !o);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setMenuOpen(false);
  });

  return (
    <section className={styles.navbar__wrapper}>
      <nav id={styles.navbar} ref={ref}>
        {/* menu logo */}
        <section>
          <RenderImage src="/images/logo.svg" alt="" />
        </section>

        <div>
          {/* menu items for large screens*/}
          <section className={styles.navbar__items}>
            <span id={styles.bounties} onClick={toggleMenuOpen}>
              Bounties <DownArrow />
            <div className={styles.open_menu}>
              {
                (menuOpen && <Dropdown />)
              }
            </div>
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
