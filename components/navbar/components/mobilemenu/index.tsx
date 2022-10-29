import { useWeb3React } from '@web3-react/core';
import RenderStyledImage from 'components/image/renderstyledimage';
import useConnectWallet from 'hooks/useConnectWallet';
import React, { useState } from 'react';
import { formatAddress } from 'utils';
import { CloseIcon, HamBurgerMenu } from './assets';
import styles from './mobilemenu.module.scss';

const OPEN_ICON = "/images/nav/plus.svg";
const CLOSE_ICON = "/images/nav/minus.svg";
const ICONS = [OPEN_ICON, CLOSE_ICON];

export default function MobileMenu() {
  const { connectWalletPressed } = useConnectWallet();
  const { account, active } = useWeb3React();

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleOpen = () => setOpen((o) => !o);
  const toggleMenuOpen = () => setMenuOpen((o) => !o);

  return (
    <>
      <section id={styles.mobilemenu}>
        <span onClick={toggleOpen}>
          {open ? <CloseIcon /> : <HamBurgerMenu />}
        </span>
        {open ? (
          <div className={styles.overlay__wrapper}>
            <div className={styles.overlay}>
              <section className={styles.menu__items}>
                <h2 onClick={toggleMenuOpen}>
                  Bounties
                  <RenderStyledImage
                    className={styles.plus__icon}
                    src={ICONS[+menuOpen]}
                  />
                </h2>
                {menuOpen && (
                  <>
                    <p>Your Bounties</p>
                    <p>Post a Bounty</p>
                    <p>Explore Bounties</p>
                  </>
                )}
                <h2>LeaderBoard</h2>
              </section>
              <section className={styles.sub__items}>
                <h5>linked wallet</h5>
                <button onClick={connectWalletPressed}>
                  {active && account
                    ? formatAddress(account)
                    : 'Connect wallet'}
                </button>
              </section>
            </div>
          </div>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
