import styled from 'styled-components';
import { devices } from 'theme';

export const ActiveFilterContainer = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 4rem;
  background-color: #161422;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  border-radius: 0.625rem;
  width: 18.049rem;
  height: 44.063rem;
  padding-top: 0.932rem;

  ${devices.mobile} {
    z-index: 1;
    width: 13.313rem;
    height: 32.5rem;
    top: 3rem;
    right: -2rem;
    padding-top: 0.688rem;
  }
`;

export const Options = styled.div`
  font-size: 1.017rem;
  margin-left: 1.525rem;

  ${devices.mobile} {
    font-size: 0.75rem;
    margin-left: 1.125rem;
  }
`;

export const DeadlineSlider = styled.div``;

export const DeadlineText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.974rem;
  margin-left: 1.61rem;

  .deadline {
    font-size: 1.186rem;

    ${devices.mobile} {
      font-size: 0.875rem;
    }
  }

  ${devices.mobile} {
    margin-top: 1.438rem;
    margin-left: 1.188rem;
  }
`;

export const DeadlineFilter = styled.div`
  .deadline-horizontal-slider {
    background-color: #ffffff;
    width: 13.897rem;
    height: 2px;
    margin-top: 1.301rem;
    margin-left: 1.864rem;

    ${devices.mobile} {
      width: 10.25rem;
      margin-top: 0.938rem;
      margin-left: 1.375rem;
    }
  }

  .menu-example-thumb {
    color: #898989;
    font-weight: 400;
    font-size: 0.847rem;

    ${devices.mobile} {
      font-size: 0.625rem;
    }
  }
`;

export const Deadline = styled.div`
  color: #898989;
  font-weight: 400;
  font-size: 0.848rem;
  margin-left: 3.983rem;

  ${devices.mobile} {
    font-size: 0.625rem;
  }
`;

export const RewardSlider = styled.div``;

export const RewardText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.644rem;
  margin-left: 1.61rem;
  .reward {
    font-size: 1.186rem;

    ${devices.mobile} {
      font-size: 0.875rem;
    }
  }

  ${devices.mobile} {
    margin-top: 2rem;
    margin-left: 1.188rem;
  }
`;

export const RewardFilter = styled.div`
  .reward-horizontal-slider {
    background-color: #ffffff;
    width: 13.897rem;
    height: 2px;
    margin-top: 1.216rem;
    margin-left: 1.864rem;

    ${devices.mobile} {
      width: 10.25rem;
      margin-top: 0.875rem;
      margin-left: 1.375rem;
    }
  }

  .menu-example-thumb {
    color: #898989;
    font-weight: 400;
    font-size: 0.847rem;

    ${devices.mobile} {
      font-size: 0.625rem;
    }
  }
`;

export const Amount = styled.div`
  color: #898989;
  font-weight: 400;
  font-size: 0.848rem;
  margin-left: 2.711rem;

  ${devices.mobile} {
    font-size: 0.625rem;
  }
`;

export const Upskill = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.453rem;
  margin-left: 1.698rem;

  ${devices.mobile} {
    margin-top: 1.875rem;
    margin-left: 1.25rem;
  }
`;

export const Input = styled.div`
  .active-checkbox {
    border: 0.169rem solid #ffffff;
    border-radius: 0.169rem;
    width: 1.525rem;
    height: 1.525rem;
    background-color: transparent;

    ${devices.mobile} {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`;

export const UpskillText = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  margin-left: 0.593rem;

  ${devices.mobile} {
    font-size: 0.625rem;
    margin-left: 0.438rem;
  }
`;

export const VotingHeading = styled.div`
  font-size: 1.186rem;
  margin-top: 2.648rem;
  margin-left: 0.593rem;
  margin-left: 1.694rem;

  ${devices.mobile} {
    margin-top: 1.938rem;
    margin-left: 1.25rem;
    font-size: 0.875rem;
  }
`;

export const Voting = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.202rem;
  margin-left: 1.698rem;

  ${devices.mobile} {
    margin-left: 1.25rem;
  }
`;

export const VotingText = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  margin-left: 0.593rem;

  ${devices.mobile} {
    font-size: 0.625rem;
    margin-left: 0.438rem;
  }
`;

export const Partners = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-top: 0.711rem;
  font-size: 1.017rem;
  gap: 0.768rem;

  .p_btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131313;
    border-radius: 0.848rem;
    height: 3.195rem;
    font-weight: 400;
    font-size: 1.017rem;
    transition: 1s;

    &:hover {
      background-color: #d4ff1e;
      color: #000000;
    }

    ${devices.mobile} {
      width: 5.5rem;
      height: 2.375rem;
      font-size: 0.75rem;
    }
  }

  ${devices.mobile} {
    margin-top: 0.688rem;
    gap: 0.563rem;
  }
`;

export const PartnersHeading = styled.div`
  margin-top: 2.033rem;
  font-size: 1.186rem;
  margin-left: 1.61rem;

  ${devices.mobile} {
    font-size: 0.875rem;
    margin-left: 1.188rem;
  }
`;

export const Selected = styled.div`
  color: #898989;
  font-size: 0.688rem;
  margin-top: 0.125rem;
  margin-left: 1.693rem;

  ${devices.mobile} {
    font-size: 0.625rem;
    margin-left: 1.25rem;
  }
`;

export const LeftPartners = styled.div``;

export const RightPartners = styled.div`
  margin-right: 0.768rem;
`;

export const PolyBtn = styled.div`
  width: 7.452rem;
`;

export const Gen = styled.div`
  width: 7.639rem;
  margin-top: 1.042rem;

  ${devices.mobile} {
    margin-top: 0.75rem;
  }
`;

export const BitcoinBtn = styled.div`
  width: 6.827rem;
`;

export const Bazuka = styled.div`
  width: 7.014rem;
  margin-top: 1.042rem;

  ${devices.mobile} {
    margin-top: 0.75rem;
  }
`;
