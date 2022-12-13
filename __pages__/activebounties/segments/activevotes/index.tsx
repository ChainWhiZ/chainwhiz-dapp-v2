import { ACTIVE_VOTES } from 'data/active';
import React from 'react';
import Votes from '../votes';
import { ActivevotesContainer } from './activevotes.styled';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ActiveVote({ active = [] }: { active: any }) {
  return (
    <ActivevotesContainer>
      {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        ACTIVE_VOTES.map((oneVote: any, index: number) => (
          <Votes key={index} vote={oneVote} />
        ))
      }
    </ActivevotesContainer>
  );
}
