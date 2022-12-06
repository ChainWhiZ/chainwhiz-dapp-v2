import React from 'react';
import { SAMPLE_SUBMISSIONS } from 'data/submissions';
import {
  ExploreBountiesWrapper,
  ExploreDisplay,
  SubmissionsWrapper,
} from './explorebounties.styled';

// import segments
import Pagination from './components/pagination/pagination';
import BountyDetails from './segments/bountydetails';
import BountySubmission from './segments/bountysubmit';
import Submissions from './segments/bountysubmissions';
import { createBreakpoint } from 'react-use';

const useBreakpoint = createBreakpoint();
export default function Explore() {
  const breakpoint = useBreakpoint();
  const pageSize = breakpoint === 'tablet' ? 4 : 8;

  return (
    <ExploreBountiesWrapper>
      <ExploreDisplay>
        <BountyDetails />
        <BountySubmission />
      </ExploreDisplay>

      <SubmissionsWrapper>
        <Submissions submissions={SAMPLE_SUBMISSIONS.slice(0, pageSize)} />
        <Pagination />
      </SubmissionsWrapper>
    </ExploreBountiesWrapper>
  );
}
