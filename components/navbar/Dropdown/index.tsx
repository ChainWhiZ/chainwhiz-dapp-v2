import React, { useState } from "react";
import PostBounty from "./Postbounty";
import styles from "./Dropdown.module.scss";

export default function index({ onconfirm }: any) {
  const [bounties, setBounties] = useState(false);
  const [postbounty, setPostbounty] = useState(false);
  const [explorebounty, setExplorebounty] = useState(false);


  return (
    <div className={styles.menu_wrapper}>
      {/* <small className={styles.menu_text}>Menu</small> */}
      <div className={styles.menu}>
        <p>Your Bounties</p>
        <p onClick={onconfirm}>Post a Bounty</p>
        <p>Explore Bounties</p>
      </div>
    </div>
  );
}
