import styled from 'styled-components';
import { devices } from 'theme';

export const ExploreBountiesWrapper = styled.div`
  box-sizing: border-box;
  background-image: url('/images/exportbounty/postbountybg.png');
  background-repeat: no-repeat;
  background-position-y: 26rem;

  position: relative;
  background-color: #100c1a;
  font-family: ${(props) => props.theme.fonts.primaryFont};
  background-size: contain;
  background-blend-mode: color-dodge;
  padding-top: 132px;
  padding-bottom: 94px;

  ${devices.mobile} {
    background-image: none;
  }

  &::before {
    content: '';
    position: absolute;
    width: 10.5rem;
    height: 10.5rem;
    top: -5.313rem;
    left: 12.375rem;
    background: #d4ff1e;
    opacity: 0.4;
    filter: blur(6.25rem);
    border-radius: 50%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    width: 10.5rem;
    height: 10.5rem;
    top: -7.313rem;
    right: 6rem;
    background: #d4ff1e;
    opacity: 0.4;
    filter: blur(6.25rem);
    border-radius: 50%;
    object-fit: cover;
    background-size: 100%;

    ${devices.mobile} {
      display: none;
    }
  }
`;

export const ExploreDisplay = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #ffffff;

  ${devices.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SubBounty = styled.div`
  div {
    max-width: 77.5rem;
    display: flex;
    gap: 1.875rem;
    flex-wrap: wrap;
    ${devices.mobile} {
      width: 19.5rem;
      gap: 0.938rem;
    }
  }
`;

export const Sublist = styled.div`
  display: table;
  margin: auto;

  hr {
    margin-top: 4.688rem;
    width: 87.938rem;
    opacity: 0.5;
    background-color: #898989;

    ${devices.mobile} {
      width: 20rem;
    }
  }
  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    color: #ffffff;
    margin-top: 5.875rem;
  }
`;
