import styled from 'styled-components';
import { devices } from 'theme';

export const CheckboxContainer = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  width: 0.6875rem;
  height: 0.5262rem;
  position: relative;
  margin: 0.3125rem auto;
  ${devices.mobile} {
  }
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<{
  checked: boolean;
}>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 0.0625rem;
  margin: -0.0625rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.0625rem;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 0.125rem;
  border-radius: 0.1875rem;
  transition: all 150ms;
  background: ${(props) =>
    props.checked ? props.theme.colors.neonGreen : 'transparent'};
  border-width: 0.125rem;
  border-style: solid;
  border-color: ${(props) =>
    props.checked ? 'transparent' : ' rgba(255, 255, 255, 0.7)'};

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem;
  label {
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.01em;
    font-feature-settings: 'tnum' on, 'lnum' on, 'liga' off;
    color: ${(props) => props.theme.colors.white};
    text-transform: capitalize;
    ${devices.mobile} {
      font-size: 0.75rem;
      line-height: 1.25rem;
      letter-spacing: 0.01em;
    }
  }
`;
