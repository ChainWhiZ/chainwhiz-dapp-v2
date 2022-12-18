import styled from 'styled-components';
import { devices } from 'theme';

export const FilterDropdownWrapper = styled.div`
  background-color: #161422;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.white};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.2);

  padding: 1.5rem 2.375rem 2.375rem 1.625rem;
  width: 18.063rem;
  height: 11.625rem;
  border-radius: 0.456rem;

  ${devices.mobile} {
    padding: 0.875rem 1.1875rem 1.375rem 0.9375rem;
    width: 10.5625rem;
    height: 6.7981rem;
    border-radius: 0.2667rem;
  }
`;

export const Options = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  font-size: 1.017rem;
  margin-bottom: 1.4375rem;
  ${devices.mobile} {
    font-size: 0.5946rem;
    margin-bottom: 0.8425rem;
  }
`;

export const Xp = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  font-size: 1.186rem;
  margin-bottom: 0.7975rem;
  ${devices.mobile} {
    font-size: 0.6937rem;
    margin-bottom: 0.4269rem;
  }
`;

export const SliderWrapper = styled.div`
  .rc-slider-mark {
    left: 0.9063rem !important;
    width: 84% !important;
  }
  .rc-slider-mark-text {
    width: max-content;
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 0.8474rem;
    line-height: 1rem;

    ${devices.mobile} {
      font-size: 0.4955rem;
      line-height: 0.5625rem;
    }
  }
  .rc-slider-rail {
    cursor: pointer;
    height: 0.1719rem;
    ${devices.mobile} {
      height: 0.0991rem;
    }
  }
  .rc-slider-dot {
    display: none;
  }
  .rc-slider-handle {
    background: ${(props) => props.theme.colors.neonGreen};
    border: none;
    opacity: 1;

    width: 0.8475rem;
    height: 0.8475rem;
    &:hover {
      border: none;
    }

    ${devices.mobile} {
      width: 0.4956rem;
      height: 0.4956rem;
      top: .4313rem;
    }
  }
`;
