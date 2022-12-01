import RenderGroupImages from 'components/image/rendergroupedimage';
import RenderImage from 'components/image/renderimage';
import RenderStyledImage from 'components/image/renderstyledimage';
import styles from './bounty.module.scss';

export default function Bounty({ bounty }) {
    return (
        <div className={styles.bounty__wrapper}>
            <div className={styles.bounty}>

                <div className={styles.bounty__header}>
                    <div>
                        <RenderStyledImage
                        src="/images/landing/polygon.svg"
                        className={styles.bounty__chain}
                        />
                    </div>

                    <div className={styles.bounty__status}>
                        <div><RenderImage src="/images/explore/status.svg" alt='' /></div>

                        <span>Voting Active</span>
                    </div>
                </div>


                <div className={styles.bounty__meta}>
                    <div>
                        <h4>{bounty.title}</h4>
                        <p>{bounty.description}</p>
                    </div>

                    <div>
                        <RenderGroupImages
                        images={bounty.userImages}
                        displayCount={4}
                        imageClassName={styles.bounty__meta__avatar}
                        />
                    </div>
                </div>

                <div className={styles.bounty__border}></div>

                <div className={styles.bounty__text}>
                    <span>{bounty.daysLeft} days left</span>

                    <div>
                        <h4>{bounty.amount} matic</h4>
                        <p>$12 USD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}