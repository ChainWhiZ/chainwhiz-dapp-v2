import React from 'react';
import {
  ActiveFilterContainer,
  Options,
  DeadlineSlider,
  DeadlineText,
  DeadlineFilter,
  Deadline,
  RewardSlider,
  RewardText,
  RewardFilter,
  Amount,
  Upskill,
  UpskillText,
  Voting,
  VotingHeading,
  VotingText,
  Partners,
  PartnersHeading,
  Selected,
  LeftPartners,
  RightPartners,
  PolyBtn,
  Gen,
  BitcoinBtn,
  Bazuka,
  Input,
} from './filter.styled';
import ReactSlider from 'react-slider';

const ActiveFilter = () => {
  return (
    <ActiveFilterContainer>
      <Options>Filter Options</Options>
      <DeadlineSlider>
        <DeadlineText>
          <div className="deadline">Deadline</div>
          <Deadline>No. of days</Deadline>
        </DeadlineText>
        <DeadlineFilter>
          <ReactSlider
            className="deadline-horizontal-slider"
            thumbClassName="deadline-example-thumb"
            trackClassName="deadline-example-track"
            defaultValue={[30, 60, 90, 120]}
            ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
            renderThumb={(props: any, state: any) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={10}
          />
        </DeadlineFilter>
      </DeadlineSlider>

      <RewardSlider>
        <RewardText>
          <div className="reward">Reward</div>
          <Amount>Amount(in USD)</Amount>
        </RewardText>
        <RewardFilter>
          <ReactSlider
            className="reward-horizontal-slider"
            thumbClassName="reward-example-thumb"
            trackClassName="reward-example-track"
            defaultValue={[0, 5, 10]}
            ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
            renderThumb={(props: any, state: any) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={10}
          />
        </RewardFilter>
      </RewardSlider>

      <Upskill>
        <Input>
          <input type="checkbox" className="active-checkbox" />
        </Input>
        <UpskillText>Show only upskilling bounties</UpskillText>
      </Upskill>

      <VotingHeading>Voting</VotingHeading>
      <Voting>
        <Input>
          <input type="checkbox" className="active-checkbox" />
        </Input>
        <VotingText>Show voting only bounties</VotingText>
      </Voting>

      <PartnersHeading>Featured Partners</PartnersHeading>
      <Selected>1 Selected</Selected>
      <Partners>
        <LeftPartners>
          <PolyBtn className="p_btn">Polygon</PolyBtn>
          <Gen className="p_btn">Next Gen</Gen>
        </LeftPartners>
        <RightPartners>
          <BitcoinBtn className="p_btn">Bitcoin</BitcoinBtn>
          <Bazuka className="p_btn">Bazuka</Bazuka>
        </RightPartners>
      </Partners>
    </ActiveFilterContainer>
  );
};

export default ActiveFilter;
