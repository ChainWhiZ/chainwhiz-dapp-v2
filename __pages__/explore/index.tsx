import React from 'react';
import {
  ExploreBountiesWrapper,
  ExploreDisplay,
  SubBounty,
  Sublist,
} from './explorebounties.styled';
import { SAMPLE_SUBMISSIONS } from 'data/submissions';
import Submission from './segments/submission';
import Pagination from './segments/pagination/pagination';
import BountyDetails from './segments/bountydetails';
import BountySubmission from './segments/bountysubmission';

export default function Explore() {
  return (
    <ExploreBountiesWrapper>

      <ExploreDisplay>
        <BountyDetails />
        {/* <BountySubmission /> */}
        <div></div>
      </ExploreDisplay>

      {/* <Sublist>
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
      </Sublist> */}

    </ExploreBountiesWrapper>
  );
}
