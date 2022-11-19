import styled from 'styled-components';
import { devices } from 'theme';

export const DropdownWrapper = styled.div`
  position: relative;

  section {
    background: #161422;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 3.125rem;
    gap: 0.9375rem;
    width: 12rem;
    padding: 1.5625rem 1.875rem;
    border-radius: 0.625rem;
    ${devices.mobile} {
      background: rgba(138, 153, 168, 0.25);
      width: 6.875rem;
      padding: .9375rem;
      gap: .75rem;
    }
  }
`;

export const DropdownHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: rgba(138, 153, 168, 0.25);
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  border: 0.0625rem solid rgba(0, 0, 0, 0.3);
  letter-spacing: 0.01em;

  border-radius: 0.125rem;
  height: 2.5rem;
  width: 12rem;
  padding: 0.5625rem 1rem;

  span {
    color: rgba(255, 255, 255, 0.95);
    mix-blend-mode: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  &::after {
    height: 0.375rem;
    width: 0.625rem;
    content: '';
    background-image: url('/images/post/ddarrow.svg');
    background-size: cover;
    display: block;
    transform: scale(0.65);
  }
  &:hover {
    background: rgba(138, 153, 168, 0.35);
  }
  ${devices.mobile} {
    width: 6.875rem;
    span {
      font-size: 9px;
      line-height: 1.25rem;
    }
  }
`;

export const DropdownItem = styled.div<{ active?: boolean }>`
  color: ${(props) => (props.active ? props.theme.colors.neonGreen : 'white')};
  display: flex;
  font-size: 0.875rem;
  cursor: pointer;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  &:hover {
    opacity: 0.85;
  }
  ${devices.mobile} {
    font-size: 10px;
  }
`;
