import { devices } from 'theme';
import styled from 'styled-components';

const WHITE_GLOW = `
  /* white glow */
  &::after {
    content: '';
    opacity: 0.1;
    width: 30.25rem;
    height: 30.25rem;
    border-radius: 50%;
    filter: blur(6.25rem);
    background: #fff;
    object-fit: cover;
    position: absolute;
    background-size: 100%;
    top: 28rem;
    left: -16rem;

    ${devices.mobile} {
      top: 23rem;
      width: 11.125rem;
      height: 11.125rem;
      left: -3rem;
      opacity: 0.3;
    }
  }
`;

export const HackingWrapper = styled.div`
  margin-top: -0.5625rem;
  ${WHITE_GLOW};
  ${devices.mobile} {
    margin: 0;
    padding: 0 20px;
  }
`;

export const GoBackButton = styled.button`
  color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  background: transparent;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  border: 0;
  position: absolute;
  gap: 1.25rem;
  top: 4.6875rem;
  font-size: 1.25rem;

  &:hover {
    opacity: 0.85;
  }

  &::before {
    content: '';
    background-size: 100%;
    display: inline-block;
    background-image: url('/images/post/leftArrow.svg');
    height: 0.8125rem;
    width: 0.5019rem;
    ${devices.mobile} {
      height: 9.67px;
      width: 5.97px;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  ${devices.mobile} {
    top: 88px;
    gap: 10px;
    font-size: 12px;
    font-family: ${(props) => props.theme.fonts.primaryFontLight};
  }
`;

export const BountyTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  font-size: 2rem;
  line-height: 3rem;

  ${devices.mobile} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const BountyCategories = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.6875rem;

  div {
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.blueFade};

    width: 10.125rem;
    height: 2.625rem;
    border-radius: 1.25rem;
    font-size: 1rem;

    ${devices.mobile} {
      width: 116px;
      height: 32px;
      font-size: 10px;
    }
  }

  ${devices.mobile} {
    gap: 5px;
    margin-top: 7px;
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
  ${devices.mobile} {
    width: 320px;
    height: 66px;
    border-radius: 5px;
    margin-top: 28px;
    padding: 13px 21px;
  }
`;

export const OverviewTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:nth-of-type(2) {
    padding: 0 5.0625rem;
    border-left: 1px solid rgba(137, 137, 137, 0.2);
    border-right: 1px solid rgba(137, 137, 137, 0.2);
    ${devices.mobile} {
      padding: 0 31px;
    }
  }
`;

export const OverviewTitle = styled.p`
  font-size: 1.125rem;
  ${devices.mobile} {
    font-size: 9.71486px;
  }
`;

export const OverviewValue = styled.span`
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  color: ${(props) => props.theme.colors.neonGreen};
  font-size: 1.9375rem;
  ${devices.mobile} {
    font-size: 17.2709px;
    line-height: 26px;
  }
`;

export const ReferenceWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.blueFade};

  width: 46.125rem;
  border-radius: 0.625rem;
  padding: 2.375rem 24px 2.6875rem;
  margin-top: 1.938rem;
  ${devices.mobile} {
    width: 320px;
    border-radius: 5px;
    padding-top: 28px;
    padding-bottom: 38px;
    margin-top: 28px;
  }
`;

export const Reference = styled.div`
  width: 100%;
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
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const ReferenceHeader = styled.h4`
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  margin-bottom: 0.4375rem;
  font-size: 1.375rem;
  line-height: 2.0625rem;
  ${devices.mobile} {
    margin-bottom: 13px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const ReferenceURL = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.125rem;
  gap: 0.75rem;
  color: ${(props) => props.theme.colors.neonGreen};
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  &:hover {
    opacity: 0.85;
  }

  .globe__image {
    height: 1.25rem;
    width: 1.25rem;
  }

  ${devices.mobile} {
    display: flex;
    align-items: flex-start;
    font-size: 12px;
    line-height: 18px;
    p {
      overflow-wrap: break-word;
      gap: 12px;
      max-width: 190px;
    }
  }
`;

export const ReferenceText = styled.p`
  font-weight: 400;
  max-width: 39.625rem;
  margin-top: 1.75rem;
  margin-bottom: 0.8125rem;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  ${devices.mobile} {
    max-width: 271px;
    margin-top: 22px;
    margin-bottom: 14px;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const EvaluationWrapper = styled.div`
  box-sizing: border-box;
  width: 46.125rem;
  height: 15.55rem;
  border-radius: 0.625rem;
  margin-top: 2.125rem;
  padding: 2.25rem 3.3125rem 2.9375rem;
  background: ${(props) => props.theme.colors.blueFade};

  h4 {
    font-family: ${(props) => props.theme.fonts.primaryFontSemiBold};
    font-size: 1.375rem;
    line-height: 2.0625rem;
    margin-bottom: 1.25rem;

    ${devices.mobile} {
      font-size: 1.125rem;
      line-height: 27px;
      margin-bottom: 17px;
    }
  }

  ${devices.mobile} {
    width: 320px;
    height: 218px;
    margin-top: 21px;
    padding: 25px 23px 30px;
  }
`;

export const EvaluationCriteriaWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  ${devices.mobile} {
    gap: 10px;
  }
`;

export const EvaluationCriteria = styled.div`
  display: flex;
  p {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.438rem;
    ${devices.mobile} {
      font-size: 0.75rem;
    }
  }
`;
