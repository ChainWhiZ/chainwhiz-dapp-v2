import styled from 'styled-components';
import { devices } from 'theme';

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