import RenderStyledImage from 'components/image/renderstyledimage';
import styles from './community.module.scss';

export default function Community() {
  return (
    <section className={styles.community__wrapper}>
      <div className={styles.community}>
        <p>Join the guild</p>
        <h3>Your voice. Your opinions. Your Community.</h3>
        <h5>
          Community is the heart and soul of Chainwhiz. Join us in our journey.
        </h5>

        <div className={styles.button_group}>
          <div>
            <RenderStyledImage
              className={styles.social__image}
              src="/images/landing/footer/discord.svg"
            />
          </div>
          <div>
            <RenderStyledImage
              className={styles.social__image}
              src="/images/landing/footer/twitter.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
