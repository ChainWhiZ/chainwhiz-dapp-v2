import React from 'react';
import styles from './Dropdown.module.scss';

export default function index() {

  return (
    <div className={styles.menu_wrapper}>
      {/* <small className={styles.menu_text}>Menu</small> */}
      <div className={styles.menu}>
        <p>Your Bounties</p>
        <p>Post a Bounty</p>
        <p>Explore Bounties</p>
      </div>
    </div>
  )
}
