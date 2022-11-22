import React, { useRef } from 'react';
import {
  BOUNTY_TYPES_OPTIONS,
  NFT_REWARD_TYPES_OPTIONS,
  BOUNTY_REWARD_TYPES,
  BOUNTY_PERMISSIONS_OPTIONS,
  BOUNTY_PERMISSIONS_PERMISSIONED_OPTIONS,
} from 'data';
import RadioButtonGroup from 'components/radio/radiobuttongroup';
import Checkbox from 'components/checkbox';
import { CreatePostTabType } from 'types/post';
import {
  BountyCriteriaWrapper,
  BountySection,
  InputWrapper,
  UploadButton,
} from './bountycriteria.styled';
import { logError } from 'utils/logger';

export default function BountyCriteriaTab({
  bountyCriteria,
}: CreatePostTabType) {
  const {
    state,
    onFormStateChange,
    toggleRewardSelectState,
    flowState,
    onValueChange,
  } = bountyCriteria;
  const imageRef = useRef<HTMLInputElement>(null);

  const onFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const file: any = event.target.files?.[0];
    // validate the image type before setting it to state
    if (file.type.split('/')[0] !== 'image') {
      return logError('Please upload only an image');
    }
    onValueChange('nftFile', file);
  };

  return (
    <BountyCriteriaWrapper>
      <BountySection>
        <InputWrapper>
          <section className="stacked">
            <label>Choose the type of Bounty*</label>
            <span>You can only choose either one</span>
          </section>
          <div className="radiogroup">
            <RadioButtonGroup
              options={BOUNTY_TYPES_OPTIONS}
              onChange={onFormStateChange}
              value={state.bountyType}
            />
          </div>
        </InputWrapper>
        <InputWrapper hide={!flowState.showUpskilledReward}>
          <section className="stacked">
            <label>Pay reward in NFT?*</label>
            <span>You can only choose either one</span>
          </section>
          <div className="radiogroup">
            <RadioButtonGroup
              options={NFT_REWARD_TYPES_OPTIONS}
              onChange={onFormStateChange}
              value={state.upskilledNFTReward}
            />
          </div>
        </InputWrapper>
        <InputWrapper hide={!flowState.showRewardType}>
          <section className="stacked">
            <label>Choose the type of Reward*</label>
            <span>You can choose any or both</span>
          </section>
          <div className="checkboxgroup">
            <Checkbox
              label={BOUNTY_REWARD_TYPES.CRYPTO}
              checked={state.paidRewardTypes.includes(
                BOUNTY_REWARD_TYPES.CRYPTO
              )}
              onClick={() => {
                toggleRewardSelectState(BOUNTY_REWARD_TYPES.CRYPTO);
              }}
            />
            <Checkbox
              label={BOUNTY_REWARD_TYPES.NFT}
              checked={state.paidRewardTypes.includes(BOUNTY_REWARD_TYPES.NFT)}
              onClick={() => {
                toggleRewardSelectState(BOUNTY_REWARD_TYPES.NFT);
              }}
            />
          </div>
        </InputWrapper>
        <InputWrapper hide={!flowState.showNFTUploadBar}>
          <section>
            <label>Upload your NFT</label>
            <span>Max upload size 120MB</span>
          </section>
          <div className="imageuploader">
            <input
              placeholder="No File Selected"
              type="text"
              disabled
              name="nftFile"
              value={state.nftFile.name}
            />
            <UploadButton onClick={() => imageRef.current?.click()}>
              Select file
            </UploadButton>
            <input onChange={onFileChangeHandler} ref={imageRef} type="file" />
          </div>
        </InputWrapper>

        <InputWrapper hide={!flowState.showNFTAddressBar}>
          <section>
            <label>Paste NFT address*</label>
            <span>NFT address</span>
          </section>
          <input
            placeholder="0x..."
            type="text"
            name="nftAddress"
            value={state.nftAddress}
            onChange={onFormStateChange}
          />
        </InputWrapper>

        <InputWrapper hide={!flowState.showMaxWinners}>
          <section>
            <label>Maximum no. of winners?</label>
            <span>
              Enter any description <br /> for this field
            </span>
          </section>
          <input
            placeholder="For e.g. 6 people"
            type="number"
            name="numOfWinners"
            min={1}
            value={state.numOfWinners}
            onChange={onFormStateChange}
          />
        </InputWrapper>
      </BountySection>

      <BountySection>
        <InputWrapper>
          <section className="stacked">
            <label>Bounty Permissions*</label>
            <span>You can only choose either one</span>
          </section>
          <div className="radiogroup">
            <RadioButtonGroup
              options={BOUNTY_PERMISSIONS_OPTIONS}
              onChange={onFormStateChange}
              value={state.permissionType}
            />
          </div>
        </InputWrapper>
        <InputWrapper hide={!flowState.showPermissionedTypes}>
          <section className="stacked">
            <label>Choose type of permission*</label>
            <span>You can only choose either one</span>
          </section>
          <div className="radiogroup">
            <RadioButtonGroup
              options={BOUNTY_PERMISSIONS_PERMISSIONED_OPTIONS}
              onChange={onFormStateChange}
              value={state.permissionedType}
            />
          </div>
        </InputWrapper>
        <InputWrapper hide={!flowState.showWalletAddress}>
          <section>
            <label>Please enter wallet address*</label>
            <span>
              Enter any description <br /> for this field
            </span>
          </section>
          <input
            placeholder="For e.g. FDGDFNJDSKN%&#DFKJ566"
            type="text"
            name="walletAddress"
            value={state.walletAddress}
            onChange={onFormStateChange}
          />
        </InputWrapper>
        <InputWrapper hide={!flowState.showTokenAddress}>
          <section>
            <label>Please enter your token*</label>
            <span>
              Enter any description <br /> for this feild
            </span>
          </section>
          <input
            placeholder="For e.g. FDGDFNJDSKN%&#DFKJ566"
            type="text"
            name="tokenAddress"
            value={state.tokenAddress}
            onChange={onFormStateChange}
          />
        </InputWrapper>
        <InputWrapper>
          <section>
            <label>Evaluation criteria*</label>
            <span>
              Maximum characters <br /> {state.evaluationCriteria.length} out of
              500
            </span>
          </section>
          <textarea
            placeholder="Describe your bounty in details for better understanding ..."
            name="evaluationCriteria"
            value={state.evaluationCriteria}
            onChange={onFormStateChange}
          />
        </InputWrapper>
      </BountySection>
    </BountyCriteriaWrapper>
  );
}
