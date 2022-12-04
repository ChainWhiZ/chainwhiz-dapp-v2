import RenderImage from 'components/image/renderimage';
import RenderStyledImage from 'components/image/renderstyledimage';
import React from 'react';
import {
  SubmissionWrapper,
  RewardsWrapper,
  NFTRewards,
  NFTWrapper,
  NFTDetails,
  CryptoReward,
  NFTRewardType,
  SubmissionButton,
  BountyWrapper,
  BountyOwnerDetails,
  Bounty,
  SubmissionsNotify,
} from './bountysubmission.styled';

const SOCIAL_IMAGES = [
  '/images/landing/footer/fb.svg',
  '/images/landing/footer/discord.svg',
  '/images/landing/footer/twitter.svg',
];

export default function BountySubmission() {
  return (
    <SubmissionWrapper>
      <SubmissionsNotify>Submissions are open!</SubmissionsNotify>
      <RewardsWrapper>
        <NFTRewards>
          <section className="aligned">
            <NFTRewardType>
              Rewards<span>( NFT + Crypto )</span>
            </NFTRewardType>
            <NFTDetails>Details</NFTDetails>
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
        <SubmissionButton>Submit Solution</SubmissionButton>
        <Bounty>
          <p>Bounty from</p>
          <BountyOwnerDetails>
            <RenderStyledImage
              className="bounty__owner__image"
              src="/images/exportbounty/zscore.png"
            />
            <section>
              <h3>DAO Name</h3>
              <div>
                {SOCIAL_IMAGES.map((url) => (
                  <RenderStyledImage
                    key={url}
                    className="social__image"
                    src={url}
                  />
                ))}
              </div>
            </section>
          </BountyOwnerDetails>
        </Bounty>
      </BountyWrapper>
    </SubmissionWrapper>
  );
}
