import styled from 'styled-components';
import { GlobalInputWrapper } from '../tabs.styled';
import { devices } from 'theme';

export const BountyCriteriaWrapper = styled.div`
  box-sizing: border-box;
  padding: 3.0625rem 3.625rem 2.375rem 2.9375rem;
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

export const UploadButton = styled.div`
  width: 6.375rem;
  height: 2.5rem;
  border-radius: .1875rem;
  background: #d4ff1e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  &:hover {
    opacity: 0.85;
  }
  ${devices.mobile} {
    width: 5.2038rem;
    height: 2.5rem;
    font-size: .75rem;
    line-height: 1.25rem;
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
  div.imageuploader {
    display: flex;
    justify-content: space-between;
    input[type='text'] {
      width: 31.5rem;
      ${devices.mobile} {
        width: 14.3575rem;
      }
    }
    input[type='file'] {
      display: none;
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
  div.checkboxgroup {
    margin-top: 1.625rem;
    display: flex;
    gap: 2.5rem;
    ${devices.mobile} {
      gap: 3.375rem;
      margin-top: 2.3125rem;
    }
  }
  input[type='text'],
  input[type='number'],
  textarea {
    width: 38.5625rem;
    ${devices.mobile} {
      width: 100%;
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

export const BountyRightSection = styled.section`
  height: 100%;
  width: 100%;
  background-color: yellow;
`;
