import React from 'react';
import styles from './category.module.scss';

export default function Category() {
  return (
    <section className={styles.category__wrapper}>
      <div className={styles.category}>
        <div className={styles.category__text}>
          <h3>
            10+ Categories.
            <br /> That&apos;s a <span>lot!</span>
          </h3>
          <p>
            Chainwhiz brings you the very best bounties from top Protocols,
            spanning across a variety of domains. You can find bounties ranging
            from design to tech, and everything in between, so that you never
            miss out on anything.
          </p>
          <button>Explore Bounties</button>
        </div>

        <div className={styles.category__images}>
          <div className={styles.category__images__top}>
            <div>Graphics design</div>
            <div>Animation</div>
          </div>
          <div className={styles.category__images__center}>
            <div>SQL Development</div>
            <div>Open AI dev</div>
          </div>
          <div className={styles.category__images__bottom}>
            <div>Data entry</div>
            <div>UI/UX Design</div>
          </div>
        </div>
      </div>

    </section>
  );
}
