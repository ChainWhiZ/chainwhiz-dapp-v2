import { useRouter } from 'next/router';
import React from 'react';
import {
  ExploreBountiesWrapper,
  ExploreDisplay,
  HackingWrapper,
  SubmissionWrapper,
  GoBackButton,
  HaczepBtn,
  DaysDisplay,
  Reference,
  Evaluation,
  RewardsMatic,
  Rewards,
  Matic,
  Bounty,
  Sublist,
} from './explorebounties.styled';
import Checkbox from 'components/checkbox';
import RenderStyledImage from 'components/image/renderstyledimage';
import { EXPORT_BOUNTY } from 'data/export';
import Submission from './exportdata';
import Pagination from './pagination';

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
          <HaczepBtn>
            <p>Ethical Hacking</p>
            <p>Zeplin engine</p>
          </HaczepBtn>
          <DaysDisplay>
            <div>
              <span>6</span>
              <p>Prices</p>
            </div>
            <hr />
            <div>
              <span>100 Days</span>
              <p>Deadline</p>
            </div>
            <hr />
            <div>
              <span>258</span>
              <p>Contributions</p>
            </div>
          </DaysDisplay>
          <Reference>
            <h4>Reference URL</h4>
            <span>https://www.ninjabrothers.com/rdp/admin-sys</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum odio ex, vehicula at venenatis in, ullamcorper non
              neque. Fusce ut efficitur libero. Phasellus tempus ex a gravida
              ullamcorper. Phasellus facilisis urna non leo tincidunt tempor.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <small>See more...</small>
          </Reference>
          <Evaluation>
            <h4>Evaluation Criterias</h4>
            <div>
              <Checkbox checked={true} label={''} onClick={() => 'err'} />
              <p>Any instructions that needs to be processed</p>
            </div>
            <div>
              <Checkbox checked={true} label={''} onClick={() => 'err'} />
              <p>Find all neccessary resources from here</p>
            </div>
            <div>
              <Checkbox checked={true} label={''} onClick={() => 'err'} />
              <p>Any instructions that needs to be processed</p>
            </div>
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
        </SubmissionWrapper>
      </ExploreDisplay>
      <Sublist>
        <hr />
        <h3>Submission(8)</h3>
        <div>
          {EXPORT_BOUNTY.map((oneSubmission, index) => (
            <Submission key={index} submission={oneSubmission} />
          ))}
        </div>
        <Pagination />
      </Sublist>
    </ExploreBountiesWrapper>
  );
}
