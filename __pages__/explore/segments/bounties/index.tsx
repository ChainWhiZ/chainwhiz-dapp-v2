import styles from './bounties.module.scss';
import { BOUNTIES } from 'data';
import Bounty from '__pages__/explore/components/bounty';

export default function Bounties() {
    return (
        <div className={styles.bounties__wrapper}>
            <div className={styles.bounties}>
                {BOUNTIES.slice(0,6).map((bounty, index) => (
                    <Bounty bounty={bounty} key={index} />
                ))}
            </div>
        </div>
    )
}