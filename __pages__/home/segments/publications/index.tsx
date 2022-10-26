import styles from './publications.module.scss';
import Publication from '__pages__/home/components/publication';

const PUBLICATIONS = [
  {
    image: '/images/landing/publication/p1.png',
    title: 'One stop solution? Chainwiz',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet rutrum est, ac',
    url: '',
  },
  {
    image: '/images/landing/publication/p2.png',
    title: 'One stop solution? Chainwiz',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet rutrum est, ac',
    url: '',
  },
  {
    image: '/images/landing/publication/p3.png',
    title: 'One stop solution? Chainwiz',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet rutrum est, ac',
    url: '',
  },
];


export default function Publications() {
  return (
    <section className={styles.publication__wrapper}>
      <div className={styles.publication}>
        <div className={styles.publication__text}>
          <h3>Our latest publications</h3>
          <p>
            Knowledge is power. Supercharge yourself with the latest blogs and
            articles on our partnerships, technology, and Web3. You&apos;re
            welcome.
          </p>
        </div>

        <div className={styles.publication__publications}>
          {PUBLICATIONS.map((publication) => {
            const { image, title, subTitle, url } = publication;
            return (
              <Publication
                key={image}
                image={image}
                title={title}
                subTitle={subTitle}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
