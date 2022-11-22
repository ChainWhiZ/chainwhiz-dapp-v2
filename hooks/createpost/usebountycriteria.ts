import {
  BOUNTY_CRITERIA,
  BOUNTY_PERMISSIONS_PERMISSIONED_TYPES,
  BOUNTY_PERMISSIONS_TYPES,
  BOUNTY_REWARD_TYPES,
  BOUNTY_TYPES,
  UPSKILLED_NFT_REWARDS_TYPES,
} from 'data';
import { useState } from 'react';
import { BasicCriteriaType } from 'types/post';
const MAX_LENGTH = 100;

export default function useBountyCriteria() {
  // define the state for the different stages
  // stage 1

  const [bountyCriteria, setBountyCriteria] =
    useState<BasicCriteriaType>(BOUNTY_CRITERIA);

  const onValueChange = (
    key: string,
    value: string | number | string[] | number[]
  ) => {
    setBountyCriteria({ ...bountyCriteria, [key]: value });
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
    if (value.length < MAX_LENGTH) {
      setBountyCriteria({ ...bountyCriteria, [name]: value });
    }
  };

  /**
   * Use this function to toggle the different states of the checkbos
   * @param value {string} the value of the
   */
  const toggleRewardSelectState = (value: string) => {
    const { paidRewardTypes } = bountyCriteria;

    let selectedRewards;
    if (!paidRewardTypes.includes(value)) {
      selectedRewards = Array.from(new Set([...paidRewardTypes, value]));
    } else {
      selectedRewards = paidRewardTypes.filter((r) => r != value);
    }
    onValueChange('paidRewardTypes', selectedRewards);
  };

  // define the variables responsible for hiding or showing several components depending on which states are filled
  const showRewardType = bountyCriteria.bountyType === BOUNTY_TYPES.PAID;
  const showUpskilledReward =
    bountyCriteria.bountyType === BOUNTY_TYPES.UPSKILLED;
  const showNFTAddressBar =
    bountyCriteria.paidRewardTypes
      .map((a) => a.toLowerCase()) //convert to lower case for easy string matching
      .includes(BOUNTY_REWARD_TYPES.NFT.toLowerCase()) && showRewardType;
  const showNFTUploadBar =
    bountyCriteria.upskilledNFTReward === UPSKILLED_NFT_REWARDS_TYPES.YES &&
    showUpskilledReward;
  // ----
  const showPermissionedTypes =
    bountyCriteria.permissionType === BOUNTY_PERMISSIONS_TYPES.PERMISSIONED;
  const showWalletAddress =
    showPermissionedTypes &&
    bountyCriteria.permissionedType ===
      BOUNTY_PERMISSIONS_PERMISSIONED_TYPES.WALLET_ADDRESS;
  const showTokenAddress =
    showPermissionedTypes &&
    bountyCriteria.permissionedType ===
      BOUNTY_PERMISSIONS_PERMISSIONED_TYPES.TOKEN_GATED;
  const showMaxWinners = bountyCriteria.paidRewardTypes.includes(
    BOUNTY_REWARD_TYPES.CRYPTO
  );
  // define the variables responsible for hiding or showing several components depending on which states are filled

  /**
   * Use this function to check if the state has been completed
   * @param state
   * @returns {Boolean} returns true|false depending on the completion status of the state variables
   */
  const verifyState = (state: BasicCriteriaType): boolean => {
    // --------- {start} variables for monitoring bounty type
    const rewardIncludesNFT = state.paidRewardTypes.includes(
      BOUNTY_REWARD_TYPES.NFT
    );
    const isPaidBountyType = state.bountyType === BOUNTY_TYPES.PAID;
    const isUpskilledBountyType = state.bountyType === BOUNTY_TYPES.UPSKILLED;
    // this would be true if the flow for a paid bounty type is completely completed
    const paidFlowCompleted =
      isPaidBountyType &&
      state.paidRewardTypes.length > 1 &&
      (rewardIncludesNFT ? state.nftAddress.length > 0 : true);
    // this would be true if the flow for an unpaid/upskilled bounty type is completed
    const unpaidFlowCompleted =
      isUpskilledBountyType &&
      (state.upskilledNFTReward === UPSKILLED_NFT_REWARDS_TYPES.YES
        ? state.nftAddress
        : true);
    const bountyTypeFlowCompleted = paidFlowCompleted || unpaidFlowCompleted;
    // --------- {end} variables for monitoring bounty type

    // --------- {start} variables for monitoring bounty permissions
    // this would be true for an open permissioned bounty if all required states are filled
    const openPermissionsFlowComplete =
      state.permissionType === BOUNTY_PERMISSIONS_TYPES.OPEN &&
      state.evaluationCriteria.length > 0;

    // this would be true for a permissioned bounty if all required states are filled
    const permissionedBountyType =
      state.permissionType === BOUNTY_PERMISSIONS_TYPES.PERMISSIONED &&
      state.evaluationCriteria &&
      ((state.permissionedType ===
        BOUNTY_PERMISSIONS_PERMISSIONED_TYPES.WALLET_ADDRESS &&
        state.walletAddress.length > 0) ||
        (state.permissionedType ===
          BOUNTY_PERMISSIONS_PERMISSIONED_TYPES.TOKEN_GATED &&
          state.tokenAddress.length > 0));

    const permissionsFlow =
      openPermissionsFlowComplete || permissionedBountyType;
    // --------- {end} variables for monitoring bounty permissions

    return Boolean(bountyTypeFlowCompleted && permissionsFlow);
  };
  const isCompleted = verifyState(bountyCriteria);

  return {
    state: bountyCriteria,
    setState: setBountyCriteria,
    onValueChange: onValueChange,
    toggleRewardSelectState,
    onFormStateChange,
    isCompleted,
    flowState: {
      showRewardType,
      showNFTAddressBar,
      showNFTUploadBar,
      showUpskilledReward,
      showPermissionedTypes,
      showWalletAddress,
      showTokenAddress,
      showMaxWinners,
    },
  };
}
