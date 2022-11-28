export const TOKEN_DROPDOWN_ITEMS = ['MATIC', 'USDC', 'UDST', 'DAI'];
export const DEFAULT_BREAKCRUMBS = ['Home', 'Post a bounty'];
export const CREATE_POST_TABS = [
  'Enter basic details',
  'Add bounty criterias',
  'Rewards & Voting',
  'Finish creating bounty',
];

// ---------------------------------
export const BOUNTY_REWARD_TYPES = {
  CRYPTO: 'crypto',
  NFT: 'NFT',
};

export const BOUNTY_TYPES = {
  PAID: 'paid',
  UPSKILLED: 'upskilled',
};

export const UPSKILLED_NFT_REWARDS_TYPES = {
  YES: 'yes',
  NO: 'no',
};

export const BOUNTY_PERMISSIONS_TYPES = {
  PERMISSIONED: 'permissioned',
  OPEN: 'open',
};

export const BOUNTY_PERMISSIONS_PERMISSIONED_TYPES = {
  WALLET_ADDRESS: 'wallet address',
  TOKEN_GATED: 'token gated',
};

export const SOLUTION_VOTING_TYPES = {
  YES: 'yes',
  NO: 'no',
};

export const VOTING_ACCESIBILITY = {
  EVERYONE: 'everyone',
  SPECIFICS: 'specifics',
};

// -------------------------------------------

// ---------------------------------
export const BASIC_DETAILS = {
  title: '',
  categories: '',
  referenceLink: '',
  description: '',
  timeToComplete: 0,
};

export const BOUNTY_CRITERIA = {
  bountyType: BOUNTY_TYPES.PAID,
  upskilledNFTReward: UPSKILLED_NFT_REWARDS_TYPES.NO,
  paidRewardTypes: [''],
  nftAddress: '',
  nftFile: { name: '' },
  numOfWinners: 1,
  permissionType: BOUNTY_PERMISSIONS_TYPES.OPEN,
  permissionedType: BOUNTY_PERMISSIONS_PERMISSIONED_TYPES.WALLET_ADDRESS,
  tokenAddress: '',
  walletAddress: '',
  evaluationCriteria: '',
};

export const REWARDS_AND_VOTING = {
  rewardAmount: '',
  rewardToken: '',
  solutionVoting: SOLUTION_VOTING_TYPES.NO,
  votingAccesibility: VOTING_ACCESIBILITY.SPECIFICS,
  votingAmount: '',
  votingTime: '',
};
// ---------------------------------

// -------------------------------------------
export const VOTING_ACCESIBILITY_OPTIONS = [
  {
    label: VOTING_ACCESIBILITY.EVERYONE,
    name: 'votingAccesibility',
  },
  {
    label: VOTING_ACCESIBILITY.SPECIFICS,
    name: 'votingAccesibility',
  },
];

export const SOLUTION_VOTING_OPTIONS = [
  {
    label: SOLUTION_VOTING_TYPES.YES,
    name: 'solutionVoting',
  },
  {
    label: SOLUTION_VOTING_TYPES.NO,
    name: 'solutionVoting',
  },
];

export const NFT_REWARD_TYPES_OPTIONS = [
  {
    label: UPSKILLED_NFT_REWARDS_TYPES.YES,
    name: 'upskilledNFTReward',
  },
  {
    label: UPSKILLED_NFT_REWARDS_TYPES.NO,
    name: 'upskilledNFTReward',
  },
];

export const BOUNTY_TYPES_OPTIONS = [
  {
    label: BOUNTY_TYPES.PAID,
    name: 'bountyType',
  },
  {
    label: BOUNTY_TYPES.UPSKILLED,
    name: 'bountyType',
  },
];

export const BOUNTY_PERMISSIONS_OPTIONS = [
  {
    label: BOUNTY_PERMISSIONS_TYPES.PERMISSIONED,
    name: 'permissionType',
  },
  {
    label: BOUNTY_PERMISSIONS_TYPES.OPEN,
    name: 'permissionType',
  },
];

export const BOUNTY_PERMISSIONS_PERMISSIONED_OPTIONS = [
  {
    label: BOUNTY_PERMISSIONS_PERMISSIONED_TYPES.WALLET_ADDRESS,
    name: 'permissionedType',
  },
  {
    label: BOUNTY_PERMISSIONS_PERMISSIONED_TYPES.TOKEN_GATED,
    name: 'permissionedType',
  },
];
// -------------------------------------------
