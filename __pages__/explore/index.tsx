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
  RewardsMatic,
  Rewards,
  Matic,
  Bountyandbutton,
  Bounty,
  SubBounty,
  Sublist
} from "./explorebounties.styled";
import Checkbox from "components/checkbox";
import RenderStyledImage from "components/image/renderstyledimage";
import { EXPORT_BOUNTY } from "data/export";
import Submission from "./exportdata";
import Pagination from "./pagination";

const DEFAULT_CHECKBOX_PROPS = {
  checked: true,
  label: '',
  onClick: () => {true}
};

const EVALUATION_CRITERIA = [
  "Any Instructions that needs to be processed",
  "Find all neccessary resources from here.",
  "Any Instructions that needs to be processed"
];


export default function Explore() {
  const router = useRouter();
  return (
    <ExploreBountiesWrapper>
      <ExploreDisplay>

        <HackingWrapper>
          <GoBackButton onClick={() => router.back()}>
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
          <span className="span">Submissions are open!</span>
          <RewardsMatic>
            <Rewards>
              <div>
                <h3>
                  Rewards<small>(NFT + Crypto)</small>
                </h3>
                <h4>NFT</h4>
                <p>Nemesis</p>
              </div>
              <div>
                <i>Devices</i>
              </div>
            </Rewards>
            <hr />
            <Matic>
              <p>Crypto</p>
              <div>
                <h3>0.025 MATIC</h3>
                <small>$21 USD</small>
              </div>
            </Matic>
          </RewardsMatic>
          <Bountyandbutton>
            <button>Submit Solution</button>
            <Bounty>
              <p>Bounty from</p>
              <section>
                <h3>DAO Name</h3>
                <div>
                  <RenderStyledImage
                    className="fb"
                    src="/images/landing/footer/fb.svg"
                  />
                  <RenderStyledImage
                    className="discord"
                    src="/images/landing/footer/discord.svg"
                  />
                  <RenderStyledImage
                    className="twitter"
                    src="/images/landing/footer/twitter.svg"
                  />
                </div>
              </section>
            </Bounty>
          </Bountyandbutton>
        </SubmissionWrapper>
      </ExploreDisplay>
      {/* <Sublist>
        <SubBounty>
          <hr />
          <h3>Submission(8)</h3>
          <div>
            {EXPORT_BOUNTY.map((oneSubmission, index) => (
              <Submission key={index} submission={oneSubmission} />
            ))}
          </div>
        </SubBounty>
        <Pagination />
      </Sublist> */}
    </ExploreBountiesWrapper>
  );
}
