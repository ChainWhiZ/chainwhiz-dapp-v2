import React from 'react';
import {
  AvatarWrapper,
  Submissions,
  SubmissionTextDetails
} from './submission.styled';
import RenderImage from 'components/image/renderimage';

export default function Submission({
  submission,
}: {
  submission: { image: string; time: string; text: string };
}) {
  return (
    <Submissions>
      <AvatarWrapper>
        <RenderImage src={submission.image} />
      </AvatarWrapper>
      <SubmissionTextDetails>
        <h4>{submission.time}</h4>
        <p>{submission.text}</p>
      </SubmissionTextDetails>
    </Submissions>
  );
}
