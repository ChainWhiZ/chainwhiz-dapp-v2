import { partners } from 'data';
import React from 'react';
import Partner from '../../components/partner';

import styles from './partners.module.scss';

export default function Partners() {
  return (
    <section className={styles.partners__wrapper}>

      <div className={styles.partners}>
        <div className={styles.partners__text}>
          <p>Our Partners</p>
          <h2>
            Class meets<span> Class </span>
          </h2>
        </div>
        <div className={styles.partners__partners}>
          {partners.map((onePartner, index) => (
            <Partner key={index} partner={onePartner} />
          ))}
        </div>
        <div className={styles.partners__showmore}>Show more</div>
      </div>

      <div className={styles.subscribe}>
        <section>
          <div className={styles.subscribe__heading_text}>
            <h3>Got a minute?</h3>
            <span>3 joined just an hour before</span>
          </div>
          <div className={styles.subscribe__input_wrapper}>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe now</button>
          </div>
        </section>

        <aside>
          <h4>Sneak peek!</h4>
          <p>
            Our newsletter lets you immerse yourself into the world of Chainwhiz<br />
            Freshly cooked bounties, new partnerships, rewarding contests or
            first looks at upcoming features We got you covered!
          </p>
        </aside>
      </div>
    </section>
  );
}
