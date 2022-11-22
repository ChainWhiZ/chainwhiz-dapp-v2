import styled from 'styled-components';
import { GlobalInputWrapper } from '../tabs.styled';
import { devices } from 'theme';

export const RAVWrapper = styled.div`
  box-sizing: border-box;
  padding: 3.0625rem 3.625rem 5.0625rem 2.9375rem;
  /* margin-top: 2.625rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5.625rem;
  min-height: 32.125rem;

  ${devices.mobile} {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 2.1875rem;
  }
`;

export const InputWrapper = styled(GlobalInputWrapper)<{ hide?: boolean }>`
  display: ${(props) => (props.hide ? 'none' : 'block')};
  section.stacked {
    flex-direction: column;
    gap: 0.1875rem;
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
      margin-top: 1.625rem;
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
  span {
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
  gap: .5rem;
  input {
    width: 26.0625rem;
  }
`;