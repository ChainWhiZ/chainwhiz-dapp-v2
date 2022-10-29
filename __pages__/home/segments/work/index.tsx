import RenderStyledImage from 'components/image/renderstyledimage';
import React from 'react';
import styles from './work.module.scss';

export default function Work() {
  return (
    <section className={styles.work_wrapper}>
      <div className={styles.work}>

        <div className={styles.work__text}>
          <h5>How we work?</h5>
          <h3>Create. Solve. Repeat</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            rutrum est, ac consequat tortor faucibus id. Quisque blandit
            sagittis ante aliquet facilisis. Curabitur suscipit consequat urna
            vitae tempor.
          </p>
          <div className={styles.action__group}>
            <button>Create now</button>
            <a target="_blank" href="https://www.roadmapurl" rel="noreferrer">
              Our Roadmap
            </a>
          </div>
        </div>

        <div className={styles.work__image__wrapper}>
          <RenderStyledImage
            className={styles.work__image}
            src="/images/landing/work/background.png"
          />
        </div>
      </div>
    </section>
  );
}
