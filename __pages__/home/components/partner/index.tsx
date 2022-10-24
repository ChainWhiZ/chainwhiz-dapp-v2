import RenderImage from 'components/image/renderimage';
import React from 'react';
import styles from './partner.module.scss';

export default function Partner({
  partner,
}: {
  partner: { image: string; title: string; text: string };
}) {
  return (
    <div className={styles.partner__wrapper}>
      <div className={styles.partner}>
        <aside>
          <RenderImage src={partner.image} />
        </aside>
        <main>
          <h4>{partner.title}</h4>
          <p>{partner.text}</p>
        </main>
      </div>
    </div>
  );
}
