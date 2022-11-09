<<<<<<< HEAD
import React, { useState } from 'react';
import PostBounty from './postbounty';
import styles from './dropdown.module.scss';

export default function index({ onconfirm }: any) {
  const [bounties, setBounties] = useState(false);
  const [postbounty, setPostbounty] = useState(false);
  const [explorebounty, setExplorebounty] = useState(false);

=======
import React from 'react';
import styles from './dropdown.module.scss';

export default function Dropdown() {
>>>>>>> adff9b85fcba94c1be3fe316290b2fae0829a5c2
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
