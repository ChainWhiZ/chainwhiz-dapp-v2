import styled from 'styled-components';
import { devices } from 'theme';

export const ErrorPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkBlue};
  font-family: ${(props) => props.theme.fonts.primaryFont};
  background-image: url('/images/landing/helixes/BG-Postbounty.png');
  min-height: calc(100vh - 6.9376rem);
  background-size: cover;

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
      top: -1.25rem;
      width: 11.5rem;
      height: 11.5rem;
      left: calc(50vw - 4.1875rem);
      opacity: 0.3;
    }
  }
`

export const ErrorPageContent = styled.div`
  text-align: center;
  position: relative;
`

export const ErrorImageWrapper = styled.div`
  position: absolute;
  top: -1rem;
  left: -8.75rem;
  right: 8.75rem;
  margin: 0 auto;
  height: 8rem;
  width: 8rem;
  opacity: 0.3;

  ${devices.mobile} {
    left: 0;
    right: 7.5rem;
    margin: 0 auto;
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const ErrorPageHeading = styled.div`
  font-weight: 600;
  font-size: 6.25rem;
  line-height: 9rem;
  color: #D4FF1E;

  ${devices.mobile} {
    font-size: 3.75rem;
    line-height: 5.625rem;
  }
`

export const ErrorPageText = styled.div`
  font-weight: 500;
  font-size: 3.75rem;
  line-height: 5.625rem;
  color: #FFFFFF;

  ${devices.mobile} {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`

export const ErrorPageDescription = styled.div`
  margin: 3rem auto;
  width: 60%;
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.813rem;
  text-align: center;
  color: #898989;

  ${devices.mobile} {
    margin: 1.5rem auto;
    font-size: 0.75rem;
    line-height: 1.125rem;
    width: 80%;
  }
`

export const ErrorPageButton = styled.button`
  background-color: #D4FF1E;
  padding: 20px 40px;
  border: 2px solid #D4FF1E;
  border-radius: 20px;

  ${devices.mobile} {
    border-radius: 10px;
    padding: 10px 20px;
  }

  span {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: #000000;

    ${devices.mobile} {
      font-size: 0.875rem;
      line-height: 1.313rem;
    }
  }
`