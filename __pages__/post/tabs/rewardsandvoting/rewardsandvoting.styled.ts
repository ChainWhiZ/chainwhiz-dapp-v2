import styled from 'styled-components';
import { GlobalInputWrapper } from '../tabs.styled';
import { devices } from 'theme';

export const RAVWrapper = styled.div`
  box-sizing: border-box;
  padding: 3.0625rem 3.625rem 5.0625rem 2.9375rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5.625rem;
  min-height: 17.0625rem;

  ${devices.mobile} {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 2.1875rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 13.625rem;
    height: 13.625rem;
    background: #d4ff1e;
    border-radius: 50%;
    opacity: 0.25;
    top: 160px;
    right: -78px;
    object-fit: contain;
    -webkit-filter: blur(6.25rem);
    filter: blur(6.25rem);
    ${devices.mobile} {
      display: none;
    }
  }
`;

export const InputWrapper = styled(GlobalInputWrapper)<{ hide?: boolean }>`
  display: ${(props) => (props.hide ? 'none' : 'block')};
  section{
    align-items: flex-end;
  }
  section.stacked {
    flex-direction: column;
    gap: 0.1875rem;
    align-items: flex-start;
    ${devices.mobile} {
      gap: 0.3125rem;
    }
  }
  div.radiogroup {
    fieldset {
      & > div {
        gap: 4.75rem;
        width: fit-content;
        ${devices.mobile} {
          gap: 3.875rem;
        }
      }
    }
    margin-top: 1.875rem;
    ${devices.mobile} {
      margin-top: 1.225rem;
    }
  }
  input[type='text'],
  input[type='number'] {
    width: 38.5625rem;
    ${devices.mobile} {
      width: 20rem;
    }
  }
  div.inputanddropdown {
    display: flex;
    gap: 0.5625rem;
    input[type='text'],
    input[type='number'] {
      width: 26rem;
      ${devices.mobile} {
        width: 12.5rem;
      }
    }
  }
  label {
    br {
      display: none;
      ${devices.mobile} {
        display: block;
      }
    }
  }
`;

export const BountySection = styled.section`
  height: 100%;

  & > div {
    &:nth-of-type(1) {
      margin-bottom: 4.375rem;
    }
    &:last-of-type {
      margin-bottom: 0;
      ${devices.mobile} {
        margin-bottom: 4.375rem;
      }
    }
    margin-bottom: 3.125rem;
    ${devices.mobile} {
      margin-bottom: 4.375rem;
    }
  }

  &:last-of-type {
    & > div {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

export const InputAndDropdown = styled.div`
  display: flex;
  gap: 0.5rem;
  input {
    width: 26.0625rem;
  }
`;
