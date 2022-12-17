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
  grid-template-columns: 224px 558px 273px 0px;
  align-items: center;
  background-color: #131313;
  color: #d4ff1e;
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
  }
`;

export const UserText = styled.div`
  /* margin-left: 1.563rem; */
  margin-left: 25px;
  display: flex;
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
  }
`;

export const DetailsText = styled.div`
  /* margin-left: 6.875rem; */
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};

  ${devices.mobile} {
    margin-left: 2.563rem;
  }
`;

export const RankText = styled.div`
  /* margin-left: 33.9375rem; */
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
    margin-left: 3.438rem;
  }
`;

export const TotalText = styled.div`
  /* margin-left: 14.5625rem; */
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};

  ${devices.mobile} {
    margin-left: 1.813rem;
  }
`;

export const TableBody = styled.div`
  color: #ffffff;
`;

export const TableContents = styled.div`
  width: 91.875rem;
  height: 6.188rem;
  background-color: #1f1e2b;
  align-items: center;
  
  border-radius: 0.625rem;
  margin-top: 1.313rem;
  
  display: grid;
  grid-template-columns: 224px 558px 273px 0px;

  ${devices.mobile} {
    width: 20rem;
    height: 3.188rem;
  }
`;

export const User = styled.div<{ rank: number }>`
  display: flex;
  align-items: center;
  font-weight: 700;

  font-size: 1.875rem;
  margin-left: 48px;

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
  .copy {
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

    /* margin-left: 7.438rem; */

    ${devices.mobile} {
      width: 1.125rem;
      height: 1.125rem;
      margin-left: 1.563rem;
    }
  }
`;

export const Rank = styled.div`
  font-weight: 600;
  font-size: 1.25rem;

  /* margin-left: 12.875rem; */

  ${devices.mobile} {
    font-size: 0.625rem;
    margin-left: 1.417rem;
  }
`;

export const Total = styled.div`
  color: ${(props) => props.theme.colors.neonGreen};

  font-size: 1.875rem;
  font-weight: 600;
  /* margin-left: 13.375rem; */

  ${devices.mobile} {
    font-size: 0.875rem;
    margin-left: 1.75rem;
  }
`;
