import React from 'react';
import ReactSlider from 'react-slider';
import {
  FilterDropdownWrapper,
  Options,
  Xp,
  Reactslider,
} from './filter.styled';

const FilterDropdown = () => {
  return (
    <FilterDropdownWrapper>
      <Options>Filter Options</Options>
      <Xp>Xp Points</Xp>
      <Reactslider>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props: any, state: any) => (
            <div {...props}>{state.valueNow}</div>
          )}
        />
      </Reactslider>
    </FilterDropdownWrapper>
  );
};

export default FilterDropdown;
