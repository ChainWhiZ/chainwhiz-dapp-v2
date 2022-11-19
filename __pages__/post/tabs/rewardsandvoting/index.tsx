import RadioButtonGroup from 'components/radio/radiobuttongroup';
import { SOLUTION_VOTING_OPTIONS, VOTING_ACCESIBILITY_OPTIONS } from 'data';
import React from 'react';
import { CreatePostTabType } from 'types/post';
import Dropdown from './dropdown';
import {
  RAVWrapper,
  BountySection,
  InputWrapper,
} from './rewardsandvoting.styled';

export default function RewardsAndVotingTab({
  rewardsAndVoting,
}: CreatePostTabType) {
  const { state, onValueChange, onFormStateChange, flowState } =
    rewardsAndVoting;

  return (
    <RAVWrapper>
      <BountySection>
        <InputWrapper>
          <section>
            <label>Bounty reward for each winner*</label>
            <span>
              Enter any description <br /> for this field
            </span>
          </section>
          <div className="inputanddropdown">
            <input
              name="rewardAmount"
              type="number"
              placeholder="Enter your reward amount"
              value={state.rewardAmount}
              onChange={onFormStateChange}
            />
            <Dropdown
              active={state.rewardToken}
              setActive={(val: string) => onValueChange('rewardToken', val)}
            />
          </div>
        </InputWrapper>
      </BountySection>
      <BountySection>
        <InputWrapper>
          <section className="stacked">
            <label>Turn On/Off Solution Voting</label>
            <span>You can only choose either one</span>
          </section>
          <div className="radiogroup">
            <RadioButtonGroup
              options={SOLUTION_VOTING_OPTIONS}
              onChange={onFormStateChange}
              value={state.solutionVoting}
            />
          </div>
        </InputWrapper>
        <InputWrapper hide={!flowState.showVotingOptions}>
          <section className="stacked">
            <label>Voting Accessibility*</label>
            <span>You can only choose either one</span>
          </section>
          <div className="radiogroup">
            <RadioButtonGroup
              options={VOTING_ACCESIBILITY_OPTIONS}
              onChange={onFormStateChange}
              value={state.votingAccesibility}
            />
          </div>
        </InputWrapper>
        <InputWrapper hide={!flowState.showVotingOptions}>
          <section>
            <label>Voting Reward</label>
            <span>
              Enter any description <br /> for this feild
            </span>
          </section>
          <div className="inputanddropdown">
            <input
              name="votingAmount"
              type="number"
              placeholder="Enter your reward amount"
              value={state.votingAmount}
              onChange={onFormStateChange}
            />
            <Dropdown
              active={state.votingToken}
              setActive={(val: string) => onValueChange('votingToken', val)}
            />
          </div>
        </InputWrapper>
        <InputWrapper hide={!flowState.showVotingOptions}>
          <section>
            <label>Time alloted for Voting*</label>
            <span>
              Enter any description <br /> for this field
            </span>
          </section>
          <input
            placeholder="For e.g. 6 Days"
            type="number"
            name="votingTime"
            value={state.votingTime}
            onChange={onFormStateChange}
          />
        </InputWrapper>
      </BountySection>
    </RAVWrapper>
  );
}
