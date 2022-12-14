import styled from 'styled-components';
import { devices } from 'theme';

export const MenuContainer = styled.div`
  position: absolute;
  top: 3rem;
  background-color: #161422;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 0.625rem;
  font-weight: 400;
  width: 10.813rem;
  height: 8.563rem;
  gap: 1.688rem;
  font-size: 1.25rem;
`;

export const MenuActive = styled.div``;

export const MenuCompleted = styled.div``;

// ActiveFilter section

export const ActiveFilterContainer = styled.div`
  position: absolute;
  top: 4rem;
  background-color: #161422;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.625rem;
  width: 18.049rem;
  height: 44.063rem;
  padding-top: 0.932rem;

  ${devices.mobile} {
    width: 13.313rem;
    height: 32.5rem;
  }
`;

export const Options = styled.div`
  font-size: 0.75rem;

  ${devices.mobile} {
    font-size: 0.75rem;
  }
`;

export const DeadlineSlider = styled.div``;

export const DeadlineText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.974rem;
  .deadline {
    font-size: 1.186rem;
  }
`;

export const DeadlineFilter = styled.div`
  .deadline-horizontal-slider {
    width: 13.897rem;
    height: 2px;
    background-color: #ffffff;
    margin-top: 1.301rem;
  }
`;

export const Deadline = styled.div`
  color: #898989;
  font-weight: 400;
  font-size: 0.848rem;
  margin-left: 3.983rem;
`;

export const RewardSlider = styled.div``;

export const RewardText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.644rem;
  .reward {
    font-size: 1.186rem;
  }
`;

export const RewardFilter = styled.div`
  .reward-horizontal-slider {
    background-color: #ffffff;
    width: 13.897rem;
    height: 2px;
    margin-top: 1.216rem;
  }
`;

export const Amount = styled.div`
  color: #898989;
  font-weight: 400;
  font-size: 0.848rem;
  margin-left: 2.711rem;
`;

export const Upskill = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.453rem;
`;

export const Input = styled.div`
  .active-checkbox{
    border: 0.169rem solid greenyellow;
    border-radius: 0.169rem;
    width: 1.525rem;
    height: 1.525rem;
    background-color: black;
    color: green;
  }
`;

export const UpskillText = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  margin-left: 0.593rem;
`;

export const VotingHeading = styled.div`
  font-size: 1.186rem;
  margin-top: 2.648rem;
  margin-left: 0.593rem;
`;

export const Voting = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.202rem;
`;

export const VotingText = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  margin-left: 0.593rem;
`;

export const Partners = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-top: 0.711rem;
  font-size: 1.017rem;
  gap: 0.768rem;

  .p_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131313;
    border-radius: 0.848rem;
    height: 3.195rem;
    font-weight: 400;
    font-size: 1.017rem;
  }
`;

export const PartnersHeading = styled.div`
  margin-top: 2.033rem;
  font-size: 1.186rem;
`;

export const Selected = styled.div`
  color: #898989;
  font-size: 0.688rem;
  margin-top: 0.125rem;
`;

export const LeftPartners = styled.div`
  /* margin-left: 0.593rem; */
`;

export const RightPartners = styled.div`
  margin-right: 0.768rem;
`;

export const PolyBtn = styled.div`
  width: 7.452rem;
`;

export const Gen = styled.div`
  width: 7.639rem;
  margin-top: 1.042rem;
`;

export const BitcoinBtn = styled.div`
  width: 6.827rem;
`;

export const Bazuka = styled.div`
  width: 7.014rem;
  margin-top: 1.042rem;
`;

// export const UpskillText = styled.div`
//   margin-left: 0.593rem;
// `;

// export const UpskillText = styled.div`
//   margin-left: 0.593rem;
// `;
