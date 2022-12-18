import React, { useState } from 'react';
import Slider from 'rc-slider';
import {
  FilterDropdownWrapper,
  Options,
  SliderWrapper,
  Xp,
} from './filter.styled';

const MARKS = {
  0: '0-1K',
  50: '1k-5k',
  100: '5k-10k',
};

const FilterDropdown = () => {
  const [sliderValue, setSliderValue] = useState([0]);

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  function log(value: any) {
    console.log(value);
    setSliderValue(value);
  }
  return (
    <FilterDropdownWrapper>
      <Options>Filter options</Options>
      <Xp>XP points</Xp>
      <SliderWrapper>
        <Slider
          range
          allowCross={false}
          onChange={log}
          marks={MARKS}
          className="leaderboard__filteroptions"
          value={sliderValue}
          step={50}
        />
      </SliderWrapper>
    </FilterDropdownWrapper>
  );
};

export default FilterDropdown;
