import styled from 'styled-components';
import { devices } from 'theme';

export const ActiveBountiesContainer = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #100c1a;
  background-image: url('/images/active/activebg.png');
  background-blend-mode: color-dodge;
  background-size: contain;
  background-position-y: 12.75rem;
  background-repeat: no-repeat;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    background-color: #d4ff1e;
    border-radius: 50%;
    filter: blur(6.25rem);
    width: 10.5rem;
    height: 10.5rem;
    opacity: 0.4;
    top: -6rem;
    left: 10rem;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #d4ff1e;
    border-radius: 50%;
    filter: blur(6.25rem);
    width: 10.5rem;
    height: 10.5rem;
    opacity: 0.4;
    top: -6rem;
    right: 10rem;
  }

  ${devices.mobile} {
    background-image: none;
  }
`;

export const ActiveHeading = styled.div``;

export const Heading = styled.div`
  font-size: 2rem;
  font-weight: 400;

  ${devices.mobile} {
    font-size: 1.375rem;
  }
`;

export const ActiveTop = styled.div`
  display: flex;
  align-items: center;

  ${devices.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 1.625rem;
  }
`;

export const ActiveMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  margin-top: 5.125rem;
`;

export const Immerse = styled.div`
  color: #898989;
  font-weight: 400;
  font-size: 1.125rem;
  margin-top: 0.75rem;
  span {
    color: #d4ff1e;
  }

  ${devices.mobile} {
    font-size: 0.625rem;
    margin-top: 0.25rem;
  }
`;

export const Active = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1c30;

  border-radius: 1.25rem;
  width: 7.813rem;
  height: 2.188rem;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 1.563rem;

  .active__img {
    width: 0.103rem;
    height: 0.615rem;
    margin-left: 0.418rem;
    background-size: 100%;

    ${devices.mobile} {
      margin-left: 0;
    }
  }

  p {
    ${devices.mobile} {
      display: none;
    }
  }

  ${devices.mobile} {
    width: 1rem;
    height: 1.375rem;
  }
`;

export const ActiveSearch = styled.div`
  display: flex;
  align-items: center;
  margin-left: 34.438rem;
  margin-top: 6.063rem;

  ${devices.mobile} {
    margin-top: 2rem;
    margin-left: 0;
  }
`;

export const ActiveInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e1c30;
  border-radius: 0.625rem;
  width: 24.625rem;
  height: 3.625rem;

  .active__search {
    width: 1.163rem;
    height: 1.163rem;
    margin-left: 1.274rem;

    ${devices.mobile} {
      width: 0.634rem;
      height: 0.634rem;
      margin-left: 1.172rem;
    }
  }

  .active__input {
    outline: none;
    background-color: transparent;
    border: none;
    color: #ffffff;
    margin-left: 0.751rem;

    ${devices.mobile} {
      margin-left: 0.819rem;
    }
  }

  .active__input::placeholder {
    font-family: 'Poppins';
    color: #ffffff;
    font-weight: 400;
    font-size: 1rem;

    ${devices.mobile} {
      font-size: 0.75rem;
    }
  }

  ${devices.mobile} {
    width: 16.5rem;
    height: 2.75rem;
  }
`;

export const ActiveFilter = styled.div`
  position: relative;
  cursor: pointer;
  background-color: #1e1c30;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.625rem;
  width: 3.813rem;
  height: 3.625rem;
  margin-left: 1.063rem;

  &::after {
    content: '';
    position: absolute;
    background-color: #d4ff1e;
    border-radius: 50%;
    width: 0.75rem;
    height: 0.75rem;
    top: -0.15rem;
    right: -0.15rem;

    ${devices.mobile} {
      width: 0.578rem;
      height: 0.578rem;
    }
  }

  .active__filter {
    width: 1.313rem;
    height: 1.125rem;

    ${devices.mobile} {
      width: 1.011rem;
      height: 0.867rem;
    }
  }

  ${devices.mobile} {
    width: 2.938rem;
    height: 2.793rem;
    margin-left: 0.5rem;
  }
`;

export const TopBounties = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-weight: 400;
  gap: 1.875rem;
  font-size: 1.375rem;
  margin-top: 4.375rem;

  div{
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1E1C30;
      color: #D4FF1E;
      border-radius: 0.625rem;
      width: fit-content;
      font-size: 1rem;
      padding: 0.625rem 1.25rem;
    }
  }

  #mobilenone {
    ${devices.mobile} {
      display: none;
    }
  }

  ${devices.mobile} {
    font-size: 1rem;
  }
`;

export const VotesBox = styled.div`
  margin-top: 3.375rem;
`;

export const Doodle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.125rem;

  &::after {
    content: '';
    position: absolute;
    background-color: #ffffff;
    filter: blur(6.25rem);
    border-radius: 50%;
    opacity: 0.5;
    width: 11rem;
    height: 11rem;
    top: 5rem;
  }

  .doodle_logo {
    width: 23.5rem;
    height: 9.625rem;

    ${devices.mobile} {
      width: 16rem;
      height: 6.553rem;
    }
  }

  ${devices.mobile} {
    margin-top: 6.563rem;
  }
`;

export const DoodleText = styled.div`
  font-weight: 400;
  font-size: 1.375rem;
  margin-top: 1.125rem;
  margin-bottom: 6.063rem;

  ${devices.mobile} {
    font-size: 0.75rem;
    margin-top: 0.697rem;
    width: 16.375rem;
    text-align: center;
  }
`;
