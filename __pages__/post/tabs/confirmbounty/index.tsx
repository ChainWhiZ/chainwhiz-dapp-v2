import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import { BOUNTY_TYPES, SOLUTION_VOTING_TYPES } from 'data';
import { CreatePostTabType } from 'types/post';
import Checkbox from 'components/checkbox';
import { logError } from 'utils/logger';

import Dropdown from '../rewardsandvoting/dropdown';
import {
  BountySection,
  ConfirmBountyWrapper,
  Heading,
  BountyFeeBreakdown,
  InputWrapper,
  AmountPaid,
  WalletSection,
  TermsCondition,
  PostBounty,
} from './confirmbounty.styled';

export default function ConfirmBounty({
  basicDetails,
  bountyCriteria,
  rewardsAndVoting,
}: CreatePostTabType) {
  const { account } = useWeb3React();
  const [checked, setChecked] = useState(false);
  const [dollarPrice, setDollarPrice] = useState(21.65);

  const { state: criteriaState, onFormStateChange: criteriaOnFormStateChange } =
    bountyCriteria;
  const {
    state: rewardsState,
    onFormStateChange: rewardOnFormStateChange,
    onValueChange: rewardOnValueChange,
  } = rewardsAndVoting;

  const totalAmount =
    Number(criteriaState.numOfWinners) * Number(rewardsState.rewardAmount);

  function finalStateIsValid() {
    const { bountyType, numOfWinners } = criteriaState;
    const { rewardAmount, solutionVoting, votingAmount } = rewardsState;
    // confirm that if the type is paid then the amount and number of winners shouldnt be null
    if (bountyType === BOUNTY_TYPES.PAID) {
      if (numOfWinners < 1) {
        logError('The number of winners must be more than one');
        return false;
      }
      if (!rewardAmount || +rewardAmount <= 0) {
        logError('The bounty reward amount must be greater than 0');
        return false;
      }
    }
    // confirm that if voting is enabled then the value for voting reward shouldnt be null
    if (
      solutionVoting === SOLUTION_VOTING_TYPES.YES &&
      (!votingAmount || +votingAmount <= 0)
    ) {
      logError('Please pass in a voting reward greater than 0');
      return false;
    }
    // confirm they agree to terms and conditions
    if (!checked) {
      logError(
        'Kindly agree with the terms and conditions before you proceed!'
      );
      return false;
    }
    return true;
  }
  const submitBounty = () => {
    // verify state
    if (finalStateIsValid()) {
      alert('submitted to console');
      console.log({
        state: {
          basicDetails,
          bountyCriteria,
          rewardsAndVoting,
        },
      });
    }
  };

  return (
    <ConfirmBountyWrapper>
      <BountySection>
        <Heading>
          <h3>Glance through and Confirm</h3>
          <h5>You may modify your selection before you confirm.</h5>
        </Heading>
        <BountyFeeBreakdown>
          <div>
            <InputWrapper text={`${totalAmount} ${rewardsState.rewardToken}`}>
              <section>
                <label>
                  Bounty reward for each <br /> winner
                </label>
              </section>
              <input
                type="number"
                name="rewardAmount"
                min={1}
                value={rewardsState.rewardAmount}
                onChange={rewardOnFormStateChange}
              />
            </InputWrapper>

            <InputWrapper>
              <section>
                <label>Number of winners</label>
              </section>
              <input
                type="number"
                name="numOfWinners"
                min={1}
                value={criteriaState.numOfWinners}
                onChange={criteriaOnFormStateChange}
                className="winners"
              />
            </InputWrapper>
          </div>

          <section>
            <InputWrapper
              text={`${rewardsState.votingAmount} ${rewardsState.votingToken}`}
            >
              <section>
                <label>Voting reward</label>
              </section>
              <input
                type="number"
                name="votingAmount"
                min={1}
                value={rewardsState.votingAmount}
                onChange={rewardOnFormStateChange}
              />
            </InputWrapper>
          </section>
        </BountyFeeBreakdown>
      </BountySection>
      <BountySection>
        <AmountPaid>
          <h4>Total Amount to be paid:</h4>
          <section>
            <section>
              <h4>Total Amount to be paid:</h4>
              <span>65</span>
            </section>
            <div>
              <Dropdown
                size="small"
                active={rewardsState.rewardToken}
                setActive={(val: string) =>
                  rewardOnValueChange('rewardToken', val)
                }
              />
              <span>
                ${dollarPrice}
                <br />
                USD
              </span>
            </div>
          </section>
          <p>
            Bounty reward for each winner x <br />
            No. of winner + Voting reward
          </p>
        </AmountPaid>
        <WalletSection>
          <h4> Connected wallet - </h4>
          <div>
            <p>{account}</p>
            <span
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const { ethereum } = window as any;
                ethereum.request({
                  method: 'wallet_requestPermissions',
                  params: [
                    {
                      eth_accounts: {},
                    },
                  ],
                });
              }}
            >
              change
            </span>
          </div>
        </WalletSection>

        <TermsCondition>
          <Checkbox
            label=""
            checked={checked}
            onClick={() => setChecked((c) => !c)}
          />
          <p>
            I agree with <span>terms and conditions</span> of this platform
          </p>
        </TermsCondition>

        <PostBounty onClick={submitBounty}>Post my bounty</PostBounty>
      </BountySection>
    </ConfirmBountyWrapper>
  );
}
