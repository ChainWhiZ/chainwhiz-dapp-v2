import styled from 'styled-components';
import { devices } from 'theme';

export const Label = styled.label<{ disabled?: boolean }>`
  span {
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.01em;
    font-feature-settings: 'tnum' on, 'lnum' on, 'liga' off;
    color: ${(props) => props.theme.colors.white};
    opacity: 0.95;
    text-transform: capitalize;
    ${devices.mobile}{
      font-size: 12px;
    }
  }
`;

export const Radio = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 1.125rem;
  height: 1.125rem;
  border: .125rem solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  transition: all 0.1s ease-in-out;

  ::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: .5rem;
    height: .5rem;
    margin: .1875rem;
  }
  :checked {
    border: .25rem solid ${(props) => props.theme.colors.neonGreen};
  }

`;
