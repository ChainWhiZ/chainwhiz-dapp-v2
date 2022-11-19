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
  numOfWinners: 1,
  permissionType: BOUNTY_PERMISSIONS_TYPES.OPEN,
  permissionedType: BOUNTY_PERMISSIONS_PERMISSIONED_TYPES.WALLET_ADDRESS,
  tokenAddress: '',
  walletAddress: '',
  evaluationCriteria: '',
};
// ---------------------------------

// -------------------------------------------
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
