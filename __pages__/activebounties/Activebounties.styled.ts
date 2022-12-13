import styled from 'styled-components';
import { devices } from 'theme';

export const ActiveBountiesContainer = styled.div`
  background-color: #100c1a;
  background-image: url('/images/active/activebg.png');
  background-blend-mode: color-dodge;
  background-size: contain;
  background-position-y: center;
  background-repeat: no-repeat;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`;

export const Heading = styled.div`
  font-size: 2rem;
  font-weight: 400;
`;

export const ActiveTop = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5.125rem;
`;

export const ActiveMenu = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5.125rem;
`;

export const ActiveHeading = styled.div`
  
`;

export const Immerse = styled.div`
  color: #898989;
  font-weight: 400;
  font-size: 1.125rem;
  margin-top: 0.75rem;
  span {
    color: #d4ff1e;
  }
`;

export const Active = styled.div`
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
  }
`;

export const ActiveSearch = styled.div`
  display: flex;
  align-items: center;
  margin-left: 34.438rem;
  margin-top: 6.063rem;
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
  }

  .active__input{
    outline: none;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    margin-left: 0.751rem;
  }

  input::placeholder{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 1rem;
  }
`;


export const ActiveFilter = styled.div`
  position: relative;
  background-color: #1e1c30;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.625rem;
  width: 3.813rem;
  height: 3.625rem;
  margin-left: 1.063rem;

  &::after{
    content: '';
    position: absolute;
    background-color: #D4FF1E;
    border-radius: 50%;
    width: 0.75rem;
    height: 0.75rem;
    top: -0.15rem;
    right: -0.15rem;
  }

  .active__filter{
    width: 1.313rem;
    height: 1.125rem;
  }
`;

export const TopBounties = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  gap: 1.875rem;
  font-size: 1.375rem;
  margin-top: 4.375rem;
`;
