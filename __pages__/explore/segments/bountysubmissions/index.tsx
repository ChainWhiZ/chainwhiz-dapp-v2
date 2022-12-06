import React from 'react';
import Submission from '../../components/submission';
import {
  SubBounty,
  SubmissionsTitle,
  SubmissionsContainer,
} from './bountysubmissions.styled';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Submissions({ submissions = [] }: { submissions: any }) {
  return (
    <SubBounty>
      <SubmissionsTitle>Submission({submissions.length})</SubmissionsTitle>

      <SubmissionsContainer>
        {
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
          submissions.map((oneSubmission: any, index: number) => (
            <Submission key={index} submission={oneSubmission} />
          ))
        }
      </SubmissionsContainer>
    </SubBounty>
  );
}
