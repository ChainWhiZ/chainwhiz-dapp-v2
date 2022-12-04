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
`;

export const SubmissionsNotify = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.neonGreen};
  align-items: center;
  font-size: 1.25rem;
  ${devices.mobile} {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }

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
      width: 18px;
      height: 18px;
      margin-right: 4px;
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
    height: fit-content;
    padding: 28px 18px 28px;
  }
`;

export const NFTRewardType = styled.h3`
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
    font-size: 12px;
    line-height: 18px;
    span {
      font-size: 9px;
      line-height: 13.5px;
      margin-left: 0;
    }
  }
`;

export const NFTDetails = styled.i`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: end;

  ${devices.mobile} {
    font-size: 12px;
    line-height: 18px;
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

  section.nft {
    padding-top: 55px;
    padding-bottom: 48px;
    border-bottom: 1px solid rgba(137, 137, 137, 0.5);
    ${devices.mobile} {
      padding-top: 25px;
      padding-bottom: 33px;
    }

    h4 {
      font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
      font-size: 16px;
      line-height: 24px;
      ${devices.mobile} {
        font-size: 16px;
        line-height: 24px;
      }
    }
    p {
      font-family: ${(props) => props.theme.fonts.primaryFontRegular};
      font-size: 16px;
      line-height: 24px;
      ${devices.mobile} {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;

export const NFTWrapper = styled.div`
  width: 9.7988rem;
  height: 8.0625rem;
  position: relative;
  ${devices.mobile} {
    width: 105.22px;
    height: 79.68px;
  }
`;

export const CryptoReward = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  margin-top: 32px;
  ${devices.mobile} {
    margin-top: 25px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    text-transform: uppercase;

    ${devices.mobile} {
      font-size: 16px;
      line-height: 24px;
      font-family: ${(props) => props.theme.fonts.primaryFont};
    }
  }

  h3 {
    font-size: 1.875rem;
    line-height: 45px;
    font-weight: 400;

    ${devices.mobile} {
      font-size: 1.25rem;
      line-height: 30px;
      margin-top: 0;
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

export const SubmissionButton = styled.div`
  display: flex;
  color: black;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: 2px solid #d4ff1e;
  background: ${(props) => props.theme.colors.neonGreen};
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  font-family: ${(props) => props.theme.fonts.primaryFontSemiBold};

  width: 28rem;
  height: 4.375rem;
  border-radius: 0.625rem;
  margin-top: 3.375rem;
  margin-bottom: 3.688rem;
  font-weight: 600;
  font-size: 1.25rem;
  &:hover {
    opacity: 0.85;
  }

  ${devices.mobile} {
    width: 326px;
    height: 41px;
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 0;
  }
`;

export const Bounty = styled.div`
  display: flex;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.blueFade};
  flex-direction: column;
  width: 28.125rem;
  height: 14.063rem;
  border-radius: 10px;
  padding: 2.625rem 2.9375rem 3.0625rem;
  ${devices.mobile} {
    width: 326px;
    height: 176px;
    padding: 28px 26px 23px;
  }

  p {
    font-size: 1.375rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    ${devices.mobile} {
      font-size: 18px;
      line-height: 27px;
    }
  }

  .bounty__owner__image {
    width: 4.6875rem;
    height: 4.6875rem;
    ${devices.mobile} {
      width: 75px;
      height: 75px;
    }
  }
`;

export const BountyOwnerDetails = styled.section`
  display: flex;
  gap: 25px;
  margin-top: 26px;

  ${devices.mobile} {
    margin-top: 23px;
  }

  section {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.25rem;
      margin-bottom: 12px;
      font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
      ${devices.mobile} {
        font-size: 20px;
        line-height: 30px;
      }
    }

    div {
      display: flex;
      gap: 0.914rem;
      ${devices.mobile} {
        gap: 14.62px;
      }

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
`;
