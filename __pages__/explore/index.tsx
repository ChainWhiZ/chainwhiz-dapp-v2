import Category from './segments/category';
import styles from './explore.module.scss';
import Header from './segments/header';


export default function ExplorePage() {
  //perform component level transformations and pass th eprops to the sample view

  return (
    <div className={styles.explore}>
        <Header />
        <Category />
    </div>
  );
}