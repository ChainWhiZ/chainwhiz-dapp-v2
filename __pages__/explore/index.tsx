import { useRouter } from "next/router";
import React from "react";
import { openNewWindow } from "utils/utilities";
import {
  ExploreBountiesWrapper,
  ExploreDisplay,
  HackingWrapper,
  SubmissionWrapper,
  GoBackButton,
  HeaderButtons,
  Overview,
  Reference,
  Evaluation,
  RewardsWrapper,
  NFTRewards,
  CryptoReward,
  BountyWrapper,
  Bounty,
  NFTWrapper,
  SubBounty,
  Sublist
} from "./explorebounties.styled";
import Checkbox from "components/checkbox";
import RenderStyledImage from "components/image/renderstyledimage";
import { SAMPLE_SUBMISSIONS } from "data/submissions";
import Submission from "./segments/submission";
import Pagination from "./segments/pagination/pagination";
import { DEFAULT_CHECKBOX_PROPS, EVALUATION_CRITERIA } from "data/evaluation";
import RenderImage from "components/image/renderimage";

const SOCIAL_IMAGES = [
  "/images/landing/footer/fb.svg",
  "/images/landing/footer/discord.svg",
  "/images/landing/footer/twitter.svg"
];


export default function Explore() {
  const router = useRouter();

  const goBack = () => router.back();
  return (
    <ExploreBountiesWrapper>
      <ExploreDisplay>

        <HackingWrapper>
          <GoBackButton onClick={goBack}>
            <span>Back</span>
          </GoBackButton>

          <h3>Hacking Challenge Mania</h3>
          <HeaderButtons>
            <div>Ethical Hacking</div>
            <div>Zeplin engine</div>
          </HeaderButtons>

          <Overview>
            <div>
              <span>6</span>
              <p>Prices</p>
            </div>
            <div>
              <span>100 Days</span>
              <p>Deadline</p>
            </div>
            <div>
              <span>258</span>
              <p>Contributions</p>
            </div>
          </Overview>

          <Reference>
            <div>
              <h4>Reference URL</h4>
              <span onClick={() => openNewWindow("refrenceURL") }> https://www.ninjabrothers.com/rdp/admin-sys</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum odio ex, vehicula at venenatis in, ullamcorper non
                neque. Fusce ut efficitur libero. Phasellus tempus ex a gravida
                ullamcorper. Phasellus facilisis urna non leo tincidunt tempor.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <small>See more...</small>
            </div>
          </Reference>

          <Evaluation>
            <h4>Evaluation Criterias</h4>
            <section>
              {
                EVALUATION_CRITERIA.map((ec:string, index:number) => (
                  <div key={index}>
                    <Checkbox {...DEFAULT_CHECKBOX_PROPS}/>
                    <p>{ec}</p>
                  </div>
                ))
              }
            </section>
          </Evaluation>
        </HackingWrapper>

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
                  <RenderImage src="/images/exportbounty/bird.png"/>
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
                    {
                      SOCIAL_IMAGES.map((url) => (
                        <RenderStyledImage
                          key={url}
                          className="social__image"
                          src="/images/landing/footer/fb.svg"
                        />
                      ))
                    }
                  </div>

                </div>
              </section>
            </Bounty>
          </BountyWrapper>
        </SubmissionWrapper>
      </ExploreDisplay>

      <Sublist>
        <SubBounty>
          <hr />
          <h3>Submission({SAMPLE_SUBMISSIONS.length})</h3>
          <div>
            {SAMPLE_SUBMISSIONS.map((oneSubmission, index) => (
              <Submission key={index} submission={oneSubmission} />
            ))}
          </div>
        </SubBounty>
        <Pagination />
      </Sublist>
    </ExploreBountiesWrapper>
  );
}
