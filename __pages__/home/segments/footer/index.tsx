import RenderStyledImage from 'components/image/renderstyledimage';
import styles from './footer.module.scss';

const SOCIALS = [
  { image: '/images/landing/footer/fb.png', url: 'www.google.com' },
  { image: '/images/landing/footer/discord.png', url: 'www.google.com' },
  { image: '/images/landing/footer/twitter.png', url: 'www.google.com' },
];

const FOOTER_TOP_LINKS = [
  { name: 'Launch app', link: '' },
  { name: 'White paper', link: '' },
  { name: 'Polygon network', link: '' },
  { name: 'Product guidelines', link: '' },
  { name: 'Brandkit', link: '' },
];

const FOOTER_BOTTOM_LINKS = [
  { name: 'Collective Intelligence', link: '' },
  { name: 'Articles', link: '' },
  { name: 'Newsletter', link: '' },
  { name: 'Disclaimer', link: '' },
  { name: 'FAQs', link: '' },
];

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__text}>
          <RenderStyledImage
            className={styles.footer__image}
            src="/images/landing/footer/footerlogo.png"
          />
          <p>
            Chainwhiz is an open-source bounty marketplace connecting Web3
            projects with builders and communities. <br /> <br />
            Our mission is to build a transparent and community-centric bounty
            platform for scaling and forming communities.
          </p>
          <div>
            {SOCIALS.map((s) => (
              <RenderStyledImage
                className={styles.social__icon}
                src={s.image}
                key={s.image}
              />
            ))}
          </div>
        </div>

        <div className={styles.footer__top__input}>
          <h1>
            <span>Wise-</span>cribe to our Newsletter
          </h1>
          <input placeholder="Enter your email" type="text" />
          <button>Subscribe now</button>
          <span>We are from Web3. We don&apos;t spam.</span>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom__left}>
          <div>
            {FOOTER_TOP_LINKS.map((link, index) => (
              <span key={index}>{link.name}</span>
            ))}
          </div>
          <div>
            {FOOTER_BOTTOM_LINKS.map((link, index) => (
              <span key={index}>{link.name}</span>
            ))}
          </div>
        </div>
        <div className={styles.footer_bottom__right}>
          <h5>Say Hi!</h5>
          <h6>hello@chainwhiz.app</h6>
        </div>
      </div>
    </section>
  );
}
