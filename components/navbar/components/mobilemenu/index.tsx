<<<<<<< HEAD
import { useWeb3React } from "@web3-react/core";
import RenderStyledImage from "components/image/renderstyledimage";
import useConnectWallet from "hooks/useconnectwallet";
import React, { useState } from "react";
import { formatAddress } from "utils";
import { CloseIcon, HamBurgerMenu, MobileBellIcon } from "./assets";
import styles from "./mobilemenu.module.scss";
=======
import { useWeb3React } from '@web3-react/core';
import RenderStyledImage from 'components/image/renderstyledimage';
import useConnectWallet from 'hooks/useconnectwallet';
import React, { useState } from 'react';
import { formatAddress } from 'utils';
import { CloseIcon, HamBurgerMenu } from './assets';
import styles from './mobilemenu.module.scss';
>>>>>>> 705ee32 (feature: create logic for the second tab for bounty criteria)

const OPEN_ICON = '/images/nav/plus.svg';
const CLOSE_ICON = '/images/nav/minus.svg';
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
        <div className={styles.ham_bell}>
          <span id={styles.mobilebell}>
            <MobileBellIcon />
          </span>
          <span onClick={toggleOpen}>
            {open ? <CloseIcon /> : <HamBurgerMenu />}
          </span>
        </div>
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
                <h5>Linked Wallet</h5>
                <button onClick={connectWalletPressed}>
                  {active && account
                    ? formatAddress(account)
                    : "Connect wallet"}
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
