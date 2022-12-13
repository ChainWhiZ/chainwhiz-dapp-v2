import styled from 'styled-components';
import { devices } from 'theme';

export const VoteContainer = styled.div`
  background-color: #1e1c30;
  color: #ffffff;
  border-radius: 1.25rem;
  width: 36.125rem;
  height: 13.813rem;

  ${devices.mobile} {
    width: 20rem;
    height: 11.063rem;
  }
`;

export const VoteTopDisplay = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.188rem;
  padding-right: 1.375rem;
`;

export const VoteHr = styled.div`
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    background-color: #898989;
    background-size: 100%;
    width: 32.563rem;
    height: 0.03rem;
    margin-top: 1.438rem;
    margin-left: 2.188rem;

    ${devices.mobile} {
      width: 18.063rem;
    }
  }
`;

export const VoteDownDisplay = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.125rem;
  padding-right: 1.313rem;
`;

export const TopLeft = styled.div`
  .polygon {
    width: 4.875rem;
    height: 1.063rem;
    margin-top: 1.688rem;

    ${devices.mobile} {
      width: 4.875rem;
      height: 1.063rem;
      margin-top: 1.25rem;
    }
  }
`;

export const Polygon = styled.div`
  width: 4.875rem;
  height: 1.063rem;
  margin-top: 1.688rem;
`;

export const TopRight = styled.div`
  margin-left: 4.5rem;
  .active__images {
    width: 1.375rem;
    height: 1.375rem;
    border-radius: 50%;
    margin-top: 1.125rem;

    ${devices.mobile} {
      width: 1.207rem;
      height: 1.207rem;
    }
  }
`;

export const DownLeft = styled.div``;

export const DownRight = styled.div`
  margin-left: 20.375rem;
`;

export const VoteHeading = styled.div`
  white-space: nowrap;
  font-size: 1.125rem;
  margin-top: 0.625rem;

  ${devices.mobile} {
    font-size: 0.875rem;
  }
`;

export const VoteDesc = styled.div`
  white-space: nowrap;
  color: #898989;
  margin-top: 0.375rem;
  font-size: 0.875rem;

  ${devices.mobile} {
    font-size: 0.75rem;
  }
`;

export const VotingImage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.563rem;

  .vote_logo {
    width: 0.625rem;
    height: 0.625rem;
  }
`;

// export const VoteLogo = styled.div``;

export const VoteText = styled.div`
  color: #d4ff1e;
  font-weight: 400;
  font-size: 0.625rem;
  margin-left: 0.5rem;
`;

export const VoteDays = styled.div`
  white-space: nowrap;
  font-weight: 300;
  font-size: 1rem;
  margin-top: 1.25rem;

  ${devices.mobile} {
    font-size: 0.625rem;
  }
`;

export const VoteMatic = styled.div`
  white-space: nowrap;
  font-size: 1.125rem;
  margin-top: 1.313rem;

  ${devices.mobile} {
    font-size: 0.75rem;
  }
`;

export const Usd = styled.div`
  white-space: nowrap;
  color: #898989;
  font-weight: 400;
  font-size: 0.75rem;
  margin-top: 0.313rem;

  ${devices.mobile} {
    font-size: 0.625rem;
  }
`;
