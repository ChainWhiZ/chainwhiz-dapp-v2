import RenderImage from 'components/image/renderimage';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer__wrapper}>
            <div className={styles.footer}>
                <div className={styles.footer__sec1}>
                    <div className={styles.footer__img1}>
                        <RenderImage src="/images/explore/doodle-6.png" alt="" />
                    </div>
                    <div className={styles.footer__img2}>
                        <RenderImage src="/images/explore/Saly-35.png" alt="" />
                    </div>
                    <div className={styles.footer__img3}>
                        <RenderImage src="/images/explore/doodle-7.png" alt="" />
                    </div>
                </div>

                <div className={styles.footer__sec2}>
                    <span>Reached the very end? Let&apos;s take a journey to the centre of the world!</span>
                </div>
            </div>
        </div>
    )
}