import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SubmissionContainer, DisplaySub } from "./exportdata.styled";
import { EXPORT_BOUNTY } from "data/export";

export default function Submission({
  submission
}: {
  submission: { image: string; time: any; text: string };
}) {

  return (
    <SubmissionContainer>
      <DisplaySub>
        <aside>
          <Image className="subimg" src={submission.image} width={60} height={60} />
        </aside>
        <main>
          <h4>{submission.time}</h4>
          <p>{submission.text}</p>
        </main>
      </DisplaySub>
    </SubmissionContainer>
  );
}
