import { BASIC_DETAILS, BOUNTY_CRITERIA } from 'data';

export type BasicDetailsType = typeof BASIC_DETAILS;
export type BasicCriteriaType = typeof BOUNTY_CRITERIA;

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
  flowState: {
    showRewardType: boolean;
    showNFTAddressBar: boolean;
    showUpskilledReward: boolean;
    showPermissionedTypes: boolean;
    showWalletAddress: boolean;
    showTokenAddress: boolean;
    showMaxWinners: boolean;
  };
};

export type CreatePostTabType = {
  basicDetails: CreatePostHookType;
  bountyCriteria: BountyCriteriaHookType;
};
