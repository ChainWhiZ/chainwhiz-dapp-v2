import { BASIC_DETAILS, BOUNTY_CRITERIA, REWARDS_AND_VOTING } from 'data';



export type BasicDetailsType = typeof BASIC_DETAILS;
export type BasicCriteriaType = typeof BOUNTY_CRITERIA;
export type RewardsAndVotingType = typeof REWARDS_AND_VOTING;



export type CreatePostHookType = {
  state: BasicDetailsType;
  setState: (oldValue: BasicDetailsType) => void;
  onFormStateChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isCompleted: boolean;
};
export type BountyCriteriaHookType = {
  state: BasicCriteriaType;
  setState: (oldValue: BasicCriteriaType) => void;
  onValueChange: (name: string, value: string[] | string | number[]) => void;
  toggleRewardSelectState: (value: string) => void;
  onFormStateChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isCompleted: boolean;
  flowState: {
    showRewardType: boolean;
    showNFTAddressBar: boolean;
    showNFTUploadBar: boolean;
    showUpskilledReward: boolean;
    showPermissionedTypes: boolean;
    showWalletAddress: boolean;
    showTokenAddress: boolean;
    showMaxWinners: boolean;
  };
};
export type RewardsAndVotingHookType = {
  state: RewardsAndVotingType;
  setState: (oldValue: RewardsAndVotingType) => void;
  onValueChange: (name: string, value: string[] | string | number[]) => void;
  onFormStateChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isCompleted: boolean;
  flowState: {
    showVotingOptions: boolean;
  };
};

export type CreatePostTabType = {
  basicDetails: CreatePostHookType;
  bountyCriteria: BountyCriteriaHookType;
  rewardsAndVoting: RewardsAndVotingHookType;
};
