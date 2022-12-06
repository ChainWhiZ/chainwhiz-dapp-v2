import { SAMPLE_SUBMISSIONS } from 'data/submissions';
import React from 'react';
import Submission from '../../components/submission';
import {
  SubBounty,
  SubmissionsTitle,
  SubmissionsContainer,
} from './bountysubmissions.styled';

export default function Submissions() {
  return (
    <SubBounty>
      <SubmissionsTitle>
        Submission({SAMPLE_SUBMISSIONS.length})
      </SubmissionsTitle>

      <SubmissionsContainer>
        {SAMPLE_SUBMISSIONS.map((oneSubmission, index) => (
          <Submission key={index} submission={oneSubmission} />
        ))}
      </SubmissionsContainer>
    </SubBounty>
  );
}
