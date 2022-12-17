import styled from 'styled-components';
import { devices } from 'theme';

export const LeaderboardContainer = styled.div`
  background-image: url('/images/leaderboard/leaderbg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  box-sizing: border-box;
  width: 100%;

  &::before {
    content: '';
    position: fixed;
    background-color: #ffffff;
    background-size: 100%;

    filter: blur(6.25rem);
    border-radius: 50%;
    opacity: 0.5;
    width: 15.25rem;
    height: 15.25rem;
    top: 24.5rem;
    left: -8.5rem;

    ${devices.mobile} {
      width: 6.5rem;
      height: 6.5rem;
      opacity: 0.8;
      top: 15rem;
      left: -4rem;
    }
  }

  &::after {
    content: '';
    position: fixed;
    background-color: #d4ff1e;
    background-size: 100%;

    filter: blur(6.25rem);
    border-radius: 50%;
    opacity: 0.5;
    width: 11.25rem;
    height: 11.25rem;
    right: -5rem;
    top: 24.5rem;

    ${devices.mobile} {
      display: none;
    }
  }

  ${devices.mobile} {
    background-image: url('/images/leaderboard/leaderboardmobilebg.png');
    background-blend-mode: color-dodge;
    background-repeat: no-repeat;
    background-position-y: 5.625rem;
    background-color: #100c1a;
    overflow-x: hidden;
    background-size: contain;
    padding-top: 3.438rem;
  }
`;

export const LeaderboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const LeaderBoardLogo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2.688rem;

  &::before {
    content: '';
    position: fixed;
    background-color: #d4ff1e;
    background-size: 100%;

    filter: blur(6.25rem);
    border-radius: 50%;
    opacity: 0.3;
    width: 13.25rem;
    height: 13.25rem;
    top: 3.75rem;
  }
`;

export const LogoImgOne = styled.div`
  margin-right: 2.688rem;
  margin-top: -2.05rem;
  .ball {
    width: 6.188rem;
    height: 3.875rem;

    ${devices.mobile} {
      width: 2.188rem;
      height: 1.5rem;
      top: 0.75rem;
    }
  }

  .left__wave {
    width: 6.491rem;
    height: 2.262rem;
    margin-left: -2.25rem;
    padding: 0;
    margin-top: 0.748rem;

    ${devices.mobile} {
      width: 2.369rem;
      height: 0.826rem;
      top: 1.938rem;
    }
  }
`;

export const LogoText = styled.div`
  color: ${(props) => props.theme.colors.neonGreen};
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  font-size: 3.75rem;

  ${devices.mobile} {
    font-size: 1.25rem;
  }
`;

export const LogoImgTwo = styled.div`
  .right__wave {
    width: 6.313rem;
    height: 3.813rem;
    margin-left: 0.563rem;
    margin-top: -4.05rem;

    ${devices.mobile} {
      width: 2.563rem;
      height: 1.438rem;
      margin-left: 2.813rem;
      top: 3.438rem;
    }
  }
`;

export const Subheading = styled.div`
  text-align: center;
  color: #ffffff;
  font-weight: 400;

  font-size: 1.875rem;
  margin-top: 0.313rem;

  ${devices.mobile} {
    font-size: 0.875rem;
  }
`;

export const SearchAndFilter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.188rem;

  ${devices.mobile} {
    margin-top: 2.813rem;
  }
`;

export const Search = styled.div`
  background-color: #1e1c30;
  width: 34.813rem;
  height: 3.625rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;

  .search {
    width: 1.163rem;
    height: 1.163rem;
    margin-left: 1.274rem;

    ${devices.mobile} {
      width: 1.043rem;
      height: 1.043rem;
      margin-left: 1.142rem;
    }
  }

  .input {
    outline: none;
    border: none;
    background-color: transparent;
    border-radius: 0.625rem;
    color: ${(props) => props.theme.colors.white};
    padding-right: 30px;
    font-family: ${(props) => props.theme.fonts.primaryFontRegular};

    margin-left: 0.751rem;
    width: 34.813rem;
    height: 2.65rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.white};
      font-weight: 400;
      font-size: 1rem;

      ${devices.mobile} {
        font-size: 0.673rem;
      }
    }
  }
  ${devices.mobile} {
    width: 16.082rem;
    height: 3.25rem;
  }
`;

export const FilterWrapper = styled.div`
  position: relative;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1c30;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  opacity: 1;
  &:hover{
    opacity: 0.85;
  }

  width: 3.813rem;
  height: 3.625rem;
  margin-left: 0.938rem;



  .filter {
    width: 1.313rem;
    height: 1.125rem;

    ${devices.mobile} {
      width: 1.177rem;
      height: 1.009rem;
    }
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #d4ff1e;
    border-radius: 50%;
    background-size: 100%;
    top: -0.15rem;
    right: -0.15rem;
    width: 0.75rem;
    height: 0.75rem;

    ${devices.mobile} {
      width: 0.313rem;
      height: 0.313rem;
      top: 0.04rem;
      right: 0.2rem;
    }
  }

  ${devices.mobile} {
    width: 3.418rem;
    height: 3.25rem;
    margin-left: 0.504rem;
  }
`;

export const UserdetailsWrapper = styled.div`
  margin-top: 2.313rem;
  margin-bottom: 2.313rem;

  ${devices.mobile} {
    margin-top: 2.188rem;
    margin-bottom: 2.188rem;
  }
`;

export const Dropdown = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;

  top: 4.375rem;
  z-index: 1;
  ${devices.mobile} {
    top: 3.75rem;
    right: 0;
  }
`;
