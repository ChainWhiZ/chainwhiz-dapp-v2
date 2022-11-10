import React from 'react';
import styles from './dropdown.module.scss';

export default function Dropdown() {
  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu}>
        <p>Your Bounties</p>
        <p>Post a Bounty</p>
        <p>Explore Bounties</p>
      </div>
    </div>
  );
}

