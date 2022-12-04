// import all segments
import Hero from './segments/hero';
import Partners from './segments/partners';
import TorchBearer from './segments/torchbearer';
import Stats from './segments/stats';
import Community from './segments/community';
import Category from './segments/category';
import Work from './segments/work';

// import all segments
import styles from './home.module.scss';
import Publication from './segments/publications';
import Teams from './segments/teams';
import Footer from './segments/footer';

export default function Sample() {

  return (
    <div className={styles.home}>
      <Hero />
      <Partners />
      <TorchBearer />
      <Stats />
      <Community />
      <Category />
      <Work />
      <Publication />
      <Teams />
      <Footer />
    </div>
  );
}
