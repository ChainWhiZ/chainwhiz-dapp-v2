import styled from 'styled-components';
import { devices } from 'theme';

export const ErrorPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #171422;
  background-blend-mode: color-dodge;
  font-family: ${(props) => props.theme.fonts.primaryFont};
  background-image: url('/images/landing/helixes/torch.png');
  min-height: 66.8125rem;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position-y: bottom;

  ${devices.mobile} {
    min-height: calc(100vh - 4.25rem);
    background-image: none;
    background-color: #171422;
    padding-bottom: 5.5325rem;
  }

  &::before {
    content: '';
    position: absolute;
    background: #ffffff;

    top: -5rem;
    left: calc(50vw - 9.8125rem);
    width: 19.625rem;
    height: 19.625rem;
    opacity: 0.2;
    filter: blur(6.25rem);

    ${devices.mobile} {
      opacity: 0.3;
      top: -1.25rem;
      width: 11.5rem;
      height: 11.5rem;
      left: calc(50vw - 4.1875rem);
    }
  }
`;

export const ErrorPageContent = styled.div`
  text-align: center;
  position: relative;
  margin-top: 12.8125rem;
  ${devices.mobile} {
    margin-top: 13.1875rem;
  }
`;

export const ErrorImageWrapper = styled.span`
  position: absolute;
  margin: 0 auto;
  opacity: 0.3;
  top: -2.1875rem;
  left: -8.75rem;
  height: 9.75rem;
  width: 9.75rem;

  ${devices.mobile} {
    width: 2.5rem;
    height: 2.5rem;
    top: -0.375rem;
    left: -2.0625rem;
  }
`;

export const ErrorPageHeading = styled.div`
  color: #d4ff1e;
  position: relative;
  width: fit-content;
  margin: auto;
  font-size: 6.25rem;
  line-height: 9rem;
  span {
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    z-index: 2;
  }

  ${devices.mobile} {
    font-size: 3.75rem;
    line-height: 5.625rem;
  }
`;

export const ErrorPageText = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  color: #ffffff;
  font-size: 3.75rem;
  line-height: 5.625rem;

  ${devices.mobile} {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;

export const ErrorPageDescription = styled.div`
  text-align: center;
  color: #898989;
  margin: 3.5rem auto 3.6875rem;
  max-width: 58.0625rem;
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.813rem;

  ${devices.mobile} {
    margin: .875rem auto 1.8125rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
    max-width: 80%;
  }
`;

export const ErrorPageButton = styled.button`
  background-color: #d4ff1e;
  border: 0.125rem solid #d4ff1e;
  padding: 1.25rem 2.5rem;
  border-radius: 1.25rem;
  cursor: pointer;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};

  ${devices.mobile} {
    border-radius: .625rem;
    padding: .625rem 1.25rem;
  }
  &:hover {
    opacity: 0.85;
  }

  a {
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    color: #000000;
    text-decoration: none;
    font-size: 1.25rem;
    line-height: 1.875rem;

    ${devices.mobile} {
      font-size: 0.875rem;
      line-height: 1.313rem;
    }
  }
`;
