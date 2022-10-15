// import { useWeb3React } from '@web3-react/core';
// import useConnectWallet from 'hooks/useConnectWallet';
import RenderGroupImages from 'components/image/rendergroupedimage';
import RenderStyledImage from 'components/image/renderstyledimage';
import styles from './bounty.module.scss';

export default function Bounty({ bounty }) {
  return (
    <div className={styles.bounty__wrapper}>
      <span>{bounty.amount} matic</span>
      <div className={styles.bounty}>
        <RenderStyledImage
          src="/images/landing/polygon.svg"
          className={styles.bounty__chain}
        />
        <div className={styles.bounty__text}>
          <h4>{bounty.title}</h4>
          <p>{bounty.description}</p>
        </div>
        <div className={styles.bounty__meta}>
          <span>{bounty.daysLeft} days left</span>
          <aside>
            <RenderGroupImages
              images={bounty.userImages}
              displayCount={4}
              imageClassName={styles.bounty__meta__avatar}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
