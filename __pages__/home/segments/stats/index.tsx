import React from 'react';
import styles from './stats.module.scss';

const STATS = {
  bountyContributions: '45k',
  bountiesPosted: '200+',
  bountyCompletionRate: '96%',
};

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__text}>
        <h4>Jaw-dropping Stats</h4>
        <p>
          Web3 is a revolution. We have chosen to be a core contributor to it
          with our innovative marketplace that helps the very best protocols and
          contributors to up their Bounty Game.
        </p>
      </div>

      <div className={styles.stats__statistics}>
        <div>
          <h1>{STATS['bountyContributions']}</h1>
          <h5>Bounty Contributions</h5>
        </div>
        <div>
          <h1>{STATS['bountiesPosted']}</h1>
          <h5>Bounties Posted</h5>
        </div>
        <div>
          <h1>{STATS['bountyCompletionRate']}</h1>
          <h5>Bounty Completion Rate.</h5>
        </div>
      </div>
    </section>
  );
}
