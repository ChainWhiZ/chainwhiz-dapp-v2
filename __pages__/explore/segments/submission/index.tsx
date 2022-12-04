import React from "react";
import { SubmissionContainer, Submissions } from "./submission.styled";
import RenderImage from "components/image/renderimage";

export default function Submission({
  submission
}: {
  submission: { image: string; time: string; text: string };
}) {

  return (
    <SubmissionContainer>
      <Submissions>
        <aside>
          <RenderImage src={submission.image} />
        </aside>
        <main>
          <h4>{submission.time}</h4>
          <p>{submission.text}</p>
        </main>
      </Submissions>
    </SubmissionContainer>
  );
}
