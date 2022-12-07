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

  &::before{
    content: '';
    position: fixed;
    background-color: #FFFFFF;
    background-size: 100%;

    filter: blur(6.25rem);
    border-radius: 50%;
    opacity: 0.5;
    width: 15.25rem;
    height: 15.25rem;
    top: 24.5rem;
    left: -8.5rem;
  }

  &::after{
    content: '';
    position: fixed;
    background-color: #D4FF1E;
    background-size: 100%;

    filter: blur(6.25rem);
    border-radius: 50%;
    opacity: 0.5;
    width: 11.25rem;
    height: 11.25rem;
    right: -5rem;
    top: 24.5rem;
  }
`;

export const LeaderboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeaderBoardLogo = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 2.688rem;

  &::before{
    content: '';
    position: fixed;
    background-color: #D4FF1E;
    background-size: 100%;

    filter: blur(6.25rem);
    border-radius: 50%;
    opacity: 0.3;
    width: 13.25rem;
    height: 13.25rem;
    top: 2rem;
  }
`;

export const LogoImgOne = styled.div`
  margin-right: 2.688rem;
  margin-top: -2.05rem;
  .ball {
    width: 6.188rem;
    height: 3.875rem;
  }

  .left__wave {
    width: 6.491rem;
    height: 2.262rem;
    margin-left: -2.25rem;
    padding: 0;
    margin-top: 0.748rem;
  }
`;

export const LogoText = styled.div`
  color: #d4ff1e;
  font-size: 3.75rem;
`;

export const LogoImgTwo = styled.div`
  .right__wave {
    width: 6.313rem;
    height: 3.813rem;
    margin-left: 0.563rem;
    margin-top: -4.05rem;
  }
`;

export const Subheading = styled.div`
  text-align: center;
  color: #ffffff;
  font-weight: 400;

  font-size: 1.875rem;
  margin-top: 0.313rem;
`;

export const SearchAndFilter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.188rem;
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
  }

  input {
    outline: none;
    border: none;
    background-color: transparent;
    border-radius: 0.625rem;
    color: #ffffff;

    margin-left: 0.751rem;
    width: 34.813rem;
    height: 2.65rem;

    &::placeholder {
      color: #ffffff;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`;

export const Filter = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1c30;
  border-radius: 0.625rem;

  width: 3.813rem;
  height: 3.625rem;
  margin-left: 0.938rem;

  .filter {
    width: 1.313rem;
    height: 1.125rem;
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
  }
`;

export const UserdetailsWrapper = styled.div`
  margin-top: 2.313rem;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 3.525rem;
  z-index: 1;
`