import RenderImage from 'components/image/renderimage';
import RenderStyledImage from 'components/image/renderstyledimage';
import React from 'react';
import {
  SubmissionWrapper,
  RewardsWrapper,
  NFTRewards,
  NFTWrapper,
  CryptoReward,
  BountyWrapper,
  Bounty
} from './bountysubmission.styled';

const SOCIAL_IMAGES = [
  '/images/landing/footer/fb.svg',
  '/images/landing/footer/discord.svg',
  '/images/landing/footer/twitter.svg',
];

export default function BountySubmission() {
  return (
    <SubmissionWrapper>
      <span className="subnission_notify">Submissions are open!</span>
      <RewardsWrapper>
        <NFTRewards>
          <section className="aligned">
            <h3>
              Rewards<span>( NFT + Crypto )</span>
            </h3>
            <i>Details</i>
          </section>
          <section className="nft">
            <div>
              <h4>NFT</h4>
              <p>Nemesis</p>
            </div>
            <NFTWrapper>
              <RenderImage src="/images/exportbounty/bird.png" />
            </NFTWrapper>
          </section>
        </NFTRewards>

        <CryptoReward>
          <p>Crypto</p>
          <div>
            <h3>0.025 MATIC</h3>
            <span>$21 USD</span>
          </div>
        </CryptoReward>
      </RewardsWrapper>

      <BountyWrapper>
        <button>Submit Solution</button>
        <Bounty>
          <p>Bounty from</p>
          <section>
            <RenderStyledImage
              className="bounty__owner__image"
              src="/images/exportbounty/zscore.png"
            />
            <div>
              <h3>DAO Name</h3>
              <div>
                {SOCIAL_IMAGES.map((url) => (
                  <RenderStyledImage
                    key={url}
                    className="social__image"
                    src="/images/landing/footer/fb.svg"
                  />
                ))}
              </div>
            </div>
          </section>
        </Bounty>
      </BountyWrapper>
    </SubmissionWrapper>
  );
}
