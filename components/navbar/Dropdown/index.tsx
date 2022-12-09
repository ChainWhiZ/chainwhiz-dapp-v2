import React from 'react';
import Link from 'next/link';
import styles from './dropdown.module.scss';

export default function Dropdown() {
  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu}>
        <p>Your Bounties</p>
        <Link href='/post'><p>Post a Bounty</p></Link>
        <Link href='/explore'><p>Explore Bounties</p></Link>
      </div>
    </div>
  );
}

