import { REWARDS_AND_VOTING, SOLUTION_VOTING_TYPES } from 'data';
import { useState } from 'react';
import { RewardsAndVotingType } from 'types/post';

export default function useRewardsAndVoting() {
  const [rewardState, setRewardState] =
    useState<RewardsAndVotingType>(REWARDS_AND_VOTING);

  /**
   * use this function to change only one key value pair
   * @param key
   * @param value
   */
  const onValueChange = (
    key: string,
    value: string | number | string[] | number[]
  ) => {
    setRewardState({ ...rewardState, [key]: value });
  };

  /**
   * This function will be triggered when an input element state changes
   * @param e The event object
   */
  const onFormStateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const name = e.target.name;
    const value = e.target.value;
    setRewardState({ ...rewardState, [name]: value });
  };

  const verifyState = (state: RewardsAndVotingType): boolean => {
    const votingSolutionOn = state.solutionVoting === SOLUTION_VOTING_TYPES.YES;
    const votingSolutionOff = state.solutionVoting === SOLUTION_VOTING_TYPES.NO;

    const bountyRewardFlowCompleted = state.rewardAmount && state.rewardToken;
    const votingFlowCompleted =
      votingSolutionOff ||
      (votingSolutionOn &&
        state.votingAccesibility &&
        state.votingToken &&
        state.votingAmount &&
        state.votingTime);

    return Boolean(bountyRewardFlowCompleted && votingFlowCompleted);
  };
  const isCompleted = verifyState(rewardState);
  const showVotingOptions =
    rewardState.solutionVoting === SOLUTION_VOTING_TYPES.YES;
  return {
    state: rewardState,
    setState: setRewardState,
    onValueChange,
    onFormStateChange,
    isCompleted,
    flowState: {
      showVotingOptions,
    },
  };
}
