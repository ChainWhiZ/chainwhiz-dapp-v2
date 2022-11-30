import RenderImage from 'components/image/renderimage';
import styles from './header.module.scss';

export default function Header() {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.header}>
                <div className={styles.header__sec1}>
                    <div className={styles.header__title}>
                        <h1>Explore Bounties</h1>

                        <div>
                            <button className={styles.header__title__btn}>
                                <span>Active</span>
                                <div>
                                    <RenderImage src="/images/explore/menu.svg" alt="" />
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className={styles.header__description}>Immerse yourself into the world of <span>bounties</span></div>
                </div>

                <div className={styles.header__sec2}>
                    <div className={styles.header__sec2__search}>

                        <form>
                            <button className={styles.search__image}>
                                <div><RenderImage src="/images/explore/search.svg" alt="" /></div>
                            </button>
                            <input className={styles.search__bar} type="text" placeholder="Search your favorite bounties" />
                        </form>
                    </div>

                    <div className={styles.header__sec2__filter}>
                        <div>
                            <div><RenderImage src="/images/explore/filter.svg" alt="" /></div>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}