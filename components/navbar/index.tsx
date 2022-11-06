import { useWeb3React } from '@web3-react/core';
import MobileMenu from './components/mobilemenu';
import RenderImage from 'components/image/renderimage';
import useConnectWallet from 'hooks/useconnectwallet';
import { useClickAway } from 'react-use';
import { formatAddress } from 'utils';
import Dropdown from './dropdown/index';

import styles from './navbar.module.scss';
import { useRef, useState } from 'react';
import RenderStyledImage from 'components/image/renderstyledimage';

export default function Navbar({ extraStyles = '' }) {
  const { connectWalletPressed } = useConnectWallet();
  const { account, active } = useWeb3React();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => setMenuOpen((o) => !o);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setMenuOpen(false);
  });

  const baseClassName = `${styles.navbar__wrapper} ${extraStyles}`;
  return (
    <section className={baseClassName}>
      <nav id={styles.navbar} ref={ref}>
        {/* menu logo */}
        <section>
          <RenderImage src="/images/nav/logo.svg" alt="" />
        </section>

        <div>
          {/* menu items for large screens*/}
          <section className={styles.navbar__items}>
            <span id={styles.bounties} onClick={toggleMenuOpen}>
<<<<<<< HEAD
              Bounties
              <RenderStyledImage
                className={styles.downarrow__icon}
                src="/images/nav/downarrow.svg"
              />
=======
              Bounties <DownArrow />
>>>>>>> 9978db1 (feature: add tab and background layout to create post section)
              <div className={styles.open_menu}>{menuOpen && <Dropdown />}</div>
            </span>
            <span id={styles.leaderboard}>Leaderboard</span>
            <span id={styles.notifications}>
              <RenderStyledImage
                className={styles.bell__icon}
                src="/images/nav/bellicon.svg"
              />
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
