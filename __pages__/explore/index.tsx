import React from 'react';
import {
  ExploreBountiesWrapper,
  ExploreDisplay,
  SubBounty,
  SubmissionsWrapper,
} from './explorebounties.styled';
import { SAMPLE_SUBMISSIONS } from 'data/submissions';

// import segments
import Pagination from './components/pagination/pagination';
import BountyDetails from './segments/bountydetails';
import BountySubmission from './segments/bountysubmit';
import Submissions from './segments/bountysubmissions';

export default function Explore() {
  return (
    <ExploreBountiesWrapper>
      <ExploreDisplay>
        <BountyDetails />
        <BountySubmission />
      </ExploreDisplay>

      <SubmissionsWrapper>
        <Submissions /> 

        <Pagination />
      </SubmissionsWrapper>
    </ExploreBountiesWrapper>
  );
}
