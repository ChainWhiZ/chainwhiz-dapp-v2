import React from 'react';

import RenderStyledImage from 'components/image/renderstyledimage';

import Bounty from '../../components/bounty';
import styles from './hero.module.scss';
import { BOUNTIES } from 'data';

const BOUNTIES_LIMIT = 4;
const viewAllBounties = () => {
  alert('coming soon');
};

export default function Segment1() {
  return (
    <div className={styles.hero}>

      <section className={styles.hero__text}>
        <h2>
          One stop destination to get <span>work</span> done
        </h2>
        <p>Kickstart your Web3 Journey now!</p>
        <div>
          <button>Launch App</button>
          <div>
            <RenderStyledImage
              src="/images/landing/watch.png"
              className={styles.svg__wrapper}
            />
            <span>Watch video</span>
          </div>
        </div>
      </section>

      <div className={styles.latest__bounties__wrapper}>
        <section className={styles.latest__bounties}>
          <div className={styles.latest__bounties__text}>
            <h4>Ready to level up and earn crypto?</h4>
            <p>Discover the latest bounties</p>
          </div>
          <div className={styles.latest__bounties__container}>
            {BOUNTIES.slice(0, BOUNTIES_LIMIT).map((bounty, index) => (
              <Bounty bounty={bounty} key={index} />
            ))}
          </div>
          <div
            onClick={viewAllBounties}
            className={styles.latest__bounties__action}
          >
            View all bounties
          </div>
        </section>
      </div>
    </div>
  );
}
