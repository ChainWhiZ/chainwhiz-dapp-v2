import styled from 'styled-components';
import { devices } from 'theme';

export const UserdetailsContainer = styled.div`
  background-color: #32313a;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  border-radius: 1.25rem;
  width: 99.5rem;
  padding-bottom: 3.75rem;

  ${devices.mobile} {
    background-color: transparent;
  }
`;

export const TableHeading = styled.div`
  display: grid;
  grid-template-columns: 15.25rem 40.3125rem 19.5625rem 0rem;
  align-items: center;
  background-color: #131313;
  color: #d4ff1e;
  z-index: 1;
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};

  border-radius: 0.625rem;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 3.75rem;
  width: 92rem;
  height: 4.125rem;

  ${devices.mobile} {
    width: 20rem;
    white-space: nowrap;
    height: 2.688rem;
    font-size: 0.75rem;
    margin-top: 0;
    grid-template-columns: 5.3125rem 6.0625rem 4.5rem 0rem;
  }
`;

export const UserHeading = styled.div`
  margin-left: 1.5625rem;
  display: flex;
  gap: 0.375rem;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  .mbtext {
    display: none;
    ${devices.mobile} {
      display: flex;
    }
  }

  .lptext {
    ${devices.mobile} {
      display: none;
    }
  }

  .polygon {
    width: 0.875rem;
    height: 0.688rem;
    margin-left: 0.375rem;

    ${devices.mobile} {
      width: 0.5rem;
      height: 0.438rem;
      margin-left: 0.313rem;
    }
  }

  ${devices.mobile} {
    margin-left: 0.75rem;
    gap: 0.3125rem;
  }
`;

export const DetailsHeading = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};

  ${devices.mobile} {
    margin-left: 0;
  }
`;

export const RankHeading = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};

  .polygonTwo {
    width: 0.875rem;
    height: 0.688rem;
    margin-left: 0.313rem;

    ${devices.mobile} {
      width: 0.5rem;
      height: 0.438rem;
      margin-left: 0.25rem;
    }
  }

  ${devices.mobile} {
    margin-left: 0;
  }
`;

export const TotalHeading = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};

  ${devices.mobile} {
    margin-left: 0;
  }
`;

export const TableBody = styled.div`
  z-index: 1;
  color: ${(props) => props.theme.colors.white};
`;

export const TableContents = styled.div`
  width: 91.875rem;
  height: 6.188rem;
  background-color: #1f1e2b;
  align-items: center;

  border-radius: 0.625rem;
  margin-top: 1.313rem;

  display: grid;
  grid-template-columns: 15.25rem 40.3125rem 19.5625rem 0rem;

  ${devices.mobile} {
    width: 20rem;
    height: 3.188rem;
    grid-template-columns: 5.3125rem 6.0625rem 4.5rem 0rem;
  }
`;

export const UserRank = styled.div<{ rank: number }>`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  font-weight: 700;
  font-size: 1.875rem;
  margin-left: 4.1563rem;

  &::after {
    opacity: ${(props) => (props.rank <= 3 ? 1 : 0)};
    content: '';
    background-image: url('/images/leaderboard/crown.png');
    background-size: 100%;
    width: 2.375rem;
    height: 1.438rem;
    margin-left: 1.156rem;

    ${devices.mobile} {
      width: 1rem;
      height: 0.625rem;
      margin-left: 0.406rem;
    }
  }

  ${devices.mobile} {
    font-size: 1.25rem;
    margin-left: 0.906rem;
  }
`;

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;

export const Details = styled.div`
  font-size: 1.25rem;
  margin-left: 1.188rem;
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};

  ${devices.mobile} {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.75rem;
    max-width: 3.125rem;
    margin-left: 0.375rem;
  }
`;

export const CopyAddress = styled.div`
  cursor: pointer;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};

  &:hover {
    transform: scale(0.97);
  }

  &:active {
    transform: scale(1.03);
  }
  .leaderboard__copy {
    width: 1rem;
    height: 1.25rem;
    margin-left: 0.813rem;

    ${devices.mobile} {
      width: 0.417rem;
      height: 0.521rem;
      margin-left: 0.333rem;
    }
  }
`;

export const UserImg = styled.div`
  .user__img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    ${devices.mobile} {
      width: 1.125rem;
      height: 1.125rem;
      margin-left: 0;
    }
  }
`;

export const Rank = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  font-size: 1.25rem;

  ${devices.mobile} {
    font-size: 0.625rem;
    margin-left: 0;
  }
`;

export const Total = styled.div`
  color: ${(props) => props.theme.colors.neonGreen};

  font-size: 1.875rem;
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};

  ${devices.mobile} {
    font-size: 0.875rem;
    margin-left: 0;
  }
`;
