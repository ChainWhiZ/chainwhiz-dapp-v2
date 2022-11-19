import RenderStyledImage from 'components/image/renderstyledimage';
import styles from './publication.module.scss';

export default function Publication({ image, title, subTitle, url }) {
  const handleClick = () => {
    alert('clicked:' + url);
  };
  return (
    <div className={styles.publication}>
      <RenderStyledImage
        src={image}
        className={styles.publication__image}
      />
      <div className={styles.publication__text}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <button onClick={handleClick} className={styles.publication__action}>
        Read now
      </button>
    </div>
  );
}
