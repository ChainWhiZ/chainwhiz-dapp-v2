import styled from 'styled-components';
import { devices } from 'theme';

export const SubmissionWrapper = styled.div`
  position: relative;

  ${devices.mobile} {
    display: flex;
    margin-top: 2.1875rem;
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
      width: 1.125rem;
      height: 1.125rem;
      margin-right: .25rem;
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
  margin-top: 1.25rem;
  padding-bottom: 4.1875rem;

  ${devices.mobile} {
    width: 20.188rem;
    height: fit-content;
    padding: 1.75rem 1.125rem 1.75rem;
  }
`;

export const NFTRewardType = styled.h3`
  white-space: nowrap;
  font-family: ${(props) => props.theme.fonts.primaryFontSemiBold};
  font-size: 1.375rem;
  span {
    font-family: ${(props) => props.theme.fonts.primaryFontRegular};
    display: inline-block;
    font-size: .75rem;
    line-height: 1.125rem;
    margin-left: .625rem;
  }
  ${devices.mobile} {
    font-size: .75rem;
    line-height: 1.125rem;
    span {
      font-size: .5625rem;
      line-height: .8438rem;
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
    font-size: .75rem;
    line-height: 1.125rem;
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
    padding-top: 3.4375rem;
    padding-bottom: 3rem;
    border-bottom: .0625rem solid rgba(137, 137, 137, 0.5);
    ${devices.mobile} {
      padding-top: 1.5625rem;
      padding-bottom: 2.0625rem;
    }

    h4 {
      font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
      font-size: 1rem;
      line-height: 1.5rem;
      ${devices.mobile} {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
    p {
      font-family: ${(props) => props.theme.fonts.primaryFontRegular};
      font-size: 1rem;
      line-height: 1.5rem;
      ${devices.mobile} {
        font-size: .75rem;
        line-height: 1.125rem;
      }
    }
  }
`;

export const NFTWrapper = styled.div`
  width: 9.7988rem;
  height: 8.0625rem;
  position: relative;
  ${devices.mobile} {
    width: 6.5762rem;
    height: 4.98rem;
  }
`;

export const CryptoReward = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  margin-top: 2rem;
  ${devices.mobile} {
    margin-top: 1.5625rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    text-transform: uppercase;

    ${devices.mobile} {
      font-size: 1rem;
      line-height: 1.5rem;
      font-family: ${(props) => props.theme.fonts.primaryFont};
    }
  }

  h3 {
    font-size: 1.875rem;
    line-height: 2.8125rem;
    font-weight: 400;

    ${devices.mobile} {
      font-size: 1.25rem;
      line-height: 1.875rem;
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
    width: 20.375rem;
    height: 2.5625rem;
    font-size: .875rem;
    margin-top: 1.875rem;
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
  border-radius: .625rem;
  padding: 2.625rem 2.9375rem 3.0625rem;
  ${devices.mobile} {
    width: 20.375rem;
    height: 11rem;
    padding: 1.75rem 1.625rem 1.4375rem;
  }

  p {
    font-size: 1.375rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    ${devices.mobile} {
      font-size: 1.125rem;
      line-height: 1.6875rem;
    }
  }

  .bounty__owner__image {
    width: 4.6875rem;
    height: 4.6875rem;
    ${devices.mobile} {
      width: 4.6875rem;
      height: 4.6875rem;
    }
  }
`;

export const BountyOwnerDetails = styled.section`
  display: flex;
  gap: 1.5625rem;
  margin-top: 1.625rem;

  ${devices.mobile} {
    margin-top: 1.4375rem;
  }

  section {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.25rem;
      margin-bottom: .75rem;
      font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
      ${devices.mobile} {
        font-size: 1.25rem;
        line-height: 1.875rem;
      }
    }

    div {
      display: flex;
      gap: 0.914rem;
      ${devices.mobile} {
        gap: .9137rem;
      }

      .social__image {
        width: 1.3413rem;
        height: 1.3462rem;
        cursor: pointer;
        &:first-of-type {
          height: 1.0962rem;
          width: 1.0962rem;
        }
        &:last-of-type {
          width: 1.37rem;
          height: 1.1875rem;
        }
      }
    }
  }
`;
