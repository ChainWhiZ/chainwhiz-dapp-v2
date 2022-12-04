/**
 * Use this file to house components
 */

import styled from 'styled-components';
import { devices } from 'theme';

export const GlobalInputWrapper = styled.div`
  & > section {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.6875rem;
    ${devices.mobile} {
      margin-bottom: .5625rem;
    }
  }

  label {
    color: white;
    font-size: 1rem;
    line-height: 1.5rem;
    ${devices.mobile} {
      font-size: 0.75rem;
      line-height: 1.125rem;
    }
  }

  span {
    text-align: right;
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 0.875rem;
    line-height: 1.3125rem;
    ${devices.mobile} {
      font-size: 0.625rem;
      line-height: 0.9375rem;
    }
  }

  input[type='text'],
  input[type='number'],
  textarea {
    color: white;
    outline: none;
    box-sizing: border-box;
    border: 0.0625rem solid rgba(255, 255, 255, 0.3);
    background: ${(props) => props.theme.colors.postInputBlack};
    width: 100%;
    border-radius: 0.125rem;
    height: 2.5rem;
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    font-family: ${(props) => props.theme.fonts.primaryFont};
    transition: ${(props) => props.theme.meta.fastTransitionSpeed};

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
      opacity: 0.7;
    }

    &:focus {
      border: 0.0625rem solid rgba(255, 255, 255, 0.6);
    }

    ${devices.mobile} {
      font-size: 0.75rem;
      line-height: 1.25rem;
      padding: 0.625rem 1rem;
    }
  }

  textarea {
    height: 11.9375rem;
    ${devices.mobile} {
      height: 11.9375rem;
    }
  }
`;
