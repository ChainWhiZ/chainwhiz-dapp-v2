import React from 'react';
import styles from './torchbearer.module.scss';
import { TORCH_BEARERS } from 'data/torchbearers';
import RenderStyledImage from 'components/image/renderstyledimage';

export default function TouchBearer() {
  return (
    <section className={styles.torchbearer__container}>
      <div className={styles.torchbearer__text}>
        <h5>Backed by the very best</h5>
        <h1>Our Torchbearers</h1>
      </div>

      <div className={styles.torchbearer__details}>
        {TORCH_BEARERS.map((torchBearer, i) => (
          <div key={i} className={styles.torchbearer}>
            <RenderStyledImage
              src={torchBearer.image}
              className={styles.torchbearer__image}
            />
            <p>{torchBearer.name}</p>
            <span>{torchBearer.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
