import React, { useState } from 'react';
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
import Slider from 'rc-slider';

// const MARKS = {
//   0: '0-1K',
//   50: '1k-5k',
//   100: '5k-10k',
// };

// const FilterDropdown = () => {
//   const [sliderValue, setSliderValue] = useState([0]);

//   //eslint-disable-next-line @typescript-eslint/no-explicit-any
//   function log(value: any) {
//     console.log(value);
//     setSliderValue(value);
//   }
//   return (
//     <FilterDropdownWrapper>
//       <Options>Filter options</Options>
//       <Xp>XP points</Xp>
//       <SliderWrapper>
//         <Slider
//           range
//           allowCross={false}
//           onChange={log}
//           marks={MARKS}
//           className="leaderboard__filteroptions"
//           value={sliderValue}
//           step={50}
//         />
//       </SliderWrapper>
//     </FilterDropdownWrapper>
//   );
// };

const DEADLINE = {
  30: '30',
  60: '60',
  90: '90',
  120: '120',
};

const REWARD = {
  0: '0-1k',
  5: '1-5k',
  10: '5-10k',
};

const ActiveFilter = () => {
  const [sliderValue, setSliderValue] = useState([0]);

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  function log(value: any) {
    console.log(value);
    setSliderValue(value);
  }
  return (
    <ActiveFilterContainer>
      <Options>Filter Options</Options>
      <DeadlineSlider>
        <DeadlineText>
          <div className="deadline">Deadline</div>
          <Deadline>No. of days</Deadline>
        </DeadlineText>
        <DeadlineFilter>
          <Slider
            className="deadline-horizontal-slider"
            marks={DEADLINE}
            range
            allowCross={false}
            onChange={log}
            value={sliderValue}
            step={10}
          />
        </DeadlineFilter>
      </DeadlineSlider>

      <RewardSlider>
        <RewardText>
          <div className="reward">Reward</div>
          <Amount>Amount(in USD)</Amount>
        </RewardText>
        <RewardFilter>
          <Slider
            className="reward-horizontal-slider"
            range
            allowCross={false}
            onChange={log}
            marks={REWARD}
            value={sliderValue}
            step={50}
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
