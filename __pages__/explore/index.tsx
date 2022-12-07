import React, { useEffect, useState } from 'react';
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
  const [pageSize, setPageSize] = useState(0);

  //@dev  add use effect to prevent running into hydration error
  useEffect(() => {
    if (!breakpoint) return;
    const _pageSize = breakpoint === 'tablet' ? 4 : 8;
    setPageSize(_pageSize);
  }, [breakpoint]);

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
