import { useWeb3React } from '@web3-react/core';
import Checkbox from 'components/checkbox';
import React, { useState } from 'react';
import { CreatePostTabType } from 'types/post';
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
  const submitBounty = () => {
    alert('submitted');
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
