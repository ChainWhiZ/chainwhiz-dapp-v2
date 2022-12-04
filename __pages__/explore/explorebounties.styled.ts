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

export const HackingWrapper = styled.div`
  margin-top: -9px;
  h3 {
    font-size: 2rem;
    font-weight: 600;

    ${devices.mobile} {
      width: 23.938rem;
      white-space: nowrap;
    }
  }

  &::after {
    content: '';
    background: #ffffff;
    opacity: 0.1;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    width: 30.25rem;
    height: 30.25rem;
    top: 28rem;
    left: -16rem;
    filter: blur(6.25rem);
    background-size: 100%;

    ${devices.mobile} {
      top: 23rem;
      width: 11.125rem;
      height: 11.125rem;
      left: -3rem;
      opacity: 0.3;
    }
  }
  ${devices.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SubmissionWrapper = styled.div`
  position: relative;

  ${devices.mobile} {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  &::before {
    content: '';
    position: absolute;
    background: #ffffff;
    opacity: 0.2;
    border-radius: 50%;
    object-fit: cover;
    width: 23.25rem;
    height: 23.25rem;
    top: 2.5rem;
    left: -7.5rem;
    filter: blur(6.25rem);

    ${devices.mobile} {
      display: none;
    }
  }

  .subnission_notify {
    display: flex;
    color: #d4ff1e;
    align-items: center;
    font-size: 1.25rem;

    &::before {
      content: '';
      display: inline-block;
      background-image: url('/images/exportbounty/clock.svg');
      background-repeat: no-repeat;
      background-size: 100%;
      width: 2rem;
      height: 2rem;
      margin-right: 0.625rem;

      ${devices.mobile} {
        width: 0.6rem;
        height: 0.75rem;
        margin-right: 0.513rem;
      }
    }
  }

  button {
    width: 28rem;
    height: 4.375rem;
    background: #d4ff1e;
    border: 2px solid #d4ff1e;
    border-radius: 0.625rem;
    margin-top: 3.375rem;
    margin-bottom: 3.688rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.25rem;
    border: 2px solid #d4ff1e;
    transition: ${(props) => props.theme.meta.fastTransitionSpeed};
    &:hover {
      opacity: 0.85;
    }
  }
`;

export const GoBackButton = styled.button`
  color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  position: absolute;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  border: 0;
  top: 75px;
  gap: 1.25rem;
  border-radius: 0.625rem;
  &:hover {
    opacity: 0.85;
  }

  span {
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  }

  &::before {
    content: '';
    background-size: 100%;
    display: inline-block;
    background-image: url('/images/post/leftArrow.svg');
    height: 0.8125rem;
    width: 0.5019rem;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 11px;

  div {
    width: 10.125rem;
    height: 2.625rem;
    background: #1e1c30;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 400;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Overview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: #1e1c30;

  width: 46.125rem;
  height: 7.625rem;
  border-radius: 0.625rem;
  margin-top: 1.9375rem;
  padding: 24px 56px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:nth-of-type(2) {
      padding: 0 81px;
      border-left: 1px solid rgba(137, 137, 137, 0.2);
      border-right: 1px solid rgba(137, 137, 137, 0.2);
    }
    ${devices.mobile} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  ${devices.mobile} {
    width: 20rem;
    height: 4.125rem;
    padding-right: 1.451rem;
    padding-left: 1.471rem;
  }

  span {
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    color: ${(props) => props.theme.colors.neonGreen};
    font-size: 1.9375rem;

    ${devices.mobile} {
      font-size: 1.079rem;
    }
  }

  p {
    font-size: 1.125rem;

    ${devices.mobile} {
      font-size: 0.607rem;
    }
  }

  hr {
    height: 4.625rem;
    opacity: 0.2;
    gap: 4.938rem;

    ${devices.mobile} {
      gap: 0.944rem;
    }
  }
`;

export const Reference = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.blueFade};
  width: 46.125rem;
  border-radius: 0.625rem;
  padding-top: 38px;
  padding-bottom: 43px;
  margin-top: 1.938rem;

  ${devices.mobile} {
    width: 20rem;
    height: 26.188rem;
    padding-left: 1.438rem;
    padding-right: 1.625rem;
  }

  div {
    h4 {
      font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
      line-height: 33px;
      margin-bottom: 7px;
      font-size: 1.375rem;

      ${devices.mobile} {
        margin-top: 1.75rem;
      }
    }

    span {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors.neonGreen};
      transition: ${(props) => props.theme.meta.fastTransitionSpeed};
      &:hover {
        opacity: 0.85;
      }

      &::before {
        content: '';
        background-size: 100%;
        display: inline-block;
        background-image: url('/images/exportbounty/globe.png');
        height: 1.25rem;
        width: 1.25rem;
        margin-right: 0.75rem;
      }

      ${devices.mobile} {
        font-size: 0.75rem;
        white-space: break-spaces;
      }
    }

    p {
      font-weight: 400;
      max-width: 39.625rem;
      margin-top: 1.75rem;
      margin-bottom: 0.8125rem;
      font-size: 1.125rem;
      line-height: 27px;

      ${devices.mobile} {
        font-size: 0.875rem;
      }
    }

    small {
      cursor: pointer;
      color: ${(props) => props.theme.colors.neonGreen};
      transition: ${(props) => props.theme.meta.fastTransitionSpeed};
      font-size: 1.125rem;
      margin-top: 0.813rem;

      &:hover {
        opacity: 0.85;
      }

      ${devices.mobile} {
        margin-bottom: 2.375rem;
      }
    }
  }
`;

export const Evaluation = styled.div`
  box-sizing: border-box;
  width: 46.125rem;
  height: 15.55rem;
  border-radius: 10px;
  margin-top: 2.125rem;
  padding: 36px 53px 47px;
  background: ${(props) => props.theme.colors.blueFade};

  h4 {
    font-size: 1.375rem;
    font-family: ${(props) => props.theme.fonts.primaryFontSemiBold};
    line-height: 2.0625rem;
    margin-bottom: 1.25rem;

    ${devices.mobile} {
      font-size: 1.125rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  div {
    display: flex;
    p {
      font-size: 1rem;
      font-weight: 400;
      margin-left: 0.438rem;
      ${devices.mobile} {
        font-size: 0.75rem;
      }
    }
    ${devices.mobile} {
      line-height: 1.25rem;
    }
  }

  ${devices.mobile} {
    width: 20rem;
    height: 236px;
    padding-left: 1.563rem;
    padding-right: 1.688rem;
  }
`;

export const RewardsWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  background: ${(props) => props.theme.colors.blueFade};
  border-radius: 0.625rem;
  width: 28.125rem;
  padding: 2.8125rem;
  margin-top: 20px;
  padding-bottom: 4.1875rem;

  ${devices.mobile} {
    width: 20.188rem;
    height: 17.75rem;
    padding-left: 1.125rem;
    padding-right: 1.25rem;
  }
`;

export const NFTRewards = styled.div`
  display: flex;
  flex-direction: column;
  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &.aligned {
      align-items: center;
    }
  }

  h3 {
    white-space: nowrap;
    font-family: ${(props) => props.theme.fonts.primaryFontSemiBold};
    font-size: 1.375rem;
    span {
      font-family: ${(props) => props.theme.fonts.primaryFontRegular};
      display: inline-block;
      font-size: 12px;
      line-height: 18px;
      margin-left: 10px;
    }
    ${devices.mobile} {
      font-size: 0.563rem;
    }
  }

  i {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: end;

    ${devices.mobile} {
      font-size: 0.75rem;
    }
  }

  section.nft {
    padding-top: 55px;
    padding-bottom: 48px;
    border-bottom: 1px solid rgba(137, 137, 137, 0.5);

    h4 {
      font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
      font-size: 16px;
      line-height: 24px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      ${(props) => props.theme.fonts.primaryFontRegular};
    }
  }
`;

export const NFTWrapper = styled.div`
  width: 9.7988rem;
  height: 8.0625rem;
  position: relative;
`;

export const CryptoReward = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  margin-top: 32px;

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    text-transform: uppercase;

    ${devices.mobile} {
      font-size: 1rem;
      margin-top: 1.628rem;
    }
  }

  h3 {
    font-size: 1.875rem;
    line-height: 45px;
    font-weight: 400;

    ${devices.mobile} {
      font-size: 1.25rem;
      margin-top: 1.563rem;
    }
  }

  span {
    font-style: italic;
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.6875rem;

    ${devices.mobile} {
      font-size: 0.875rem;
    }
  }
`;

export const BountyWrapper = styled.div`
  ${devices.mobile} {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 1.438rem;
  }
`;

export const Bounty = styled.div`
  box-sizing: border-box;
  width: 28.125rem;
  height: 14.063rem;
  background: #1e1c30;
  border-radius: 10px;
  padding: 2.625rem 2.9375rem 3.0625rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.375rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  }

  .bounty__owner__image {
    width: 4.6875rem;
    height: 4.6875rem;
  }

  section {
    display: flex;
    gap: 25px;
    margin-top: 26px;

    & > div {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 1.25rem;
        margin-bottom: 12px;
        font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
      }

      div {
        display: flex;
        gap: 0.914rem;

        .social__image {
          width: 21.46px;
          height: 21.54px;
          cursor: pointer;
          &:first-of-type {
            height: 17.54px;
            width: 17.54px;
          }
          &:last-of-type {
            width: 21.92px;
            height: 19px;
          }
        }
      }
    }
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
