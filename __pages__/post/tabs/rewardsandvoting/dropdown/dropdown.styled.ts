import styled from 'styled-components';
import { devices } from 'theme';

export const DropdownWrapper = styled.div`
  position: relative;
  section {
    border: 0.0625rem solid ${(props) => props.theme.colors.neonGreen};
    background: #161422;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 3.125rem;
    right: 0;
    gap: 0.9375rem;
    padding: 1.5625rem 1.875rem;
    border-radius: 0.125rem;
    background: #3a3d49;

    ${devices.mobile} {
      background: #3a3d49;
      padding: 0.9375rem;
      gap: 0.75rem;
    }
  }
`;
export const DropdownHeader = styled.div<{ active?: boolean; size?: string }>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #3a3d49;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  border: 0.0625rem solid rgba(0, 0, 0, 0.3);
  letter-spacing: 0.01em;
  width: ${(props) => (props.size === 'large' ? '12rem' : '8.75rem')};
  border-radius: 0.125rem;
  border: 0.0625rem solid
    ${(props) => (props.active ? props.theme.colors.neonGreen : 'transparent')};
  height: 2.5rem;
  padding: 0.5625rem 1rem;

  span {
    color: rgba(255, 255, 255, 0.95);
    mix-blend-mode: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
    ${devices.mobile} {
      font-size: 0.625rem;
    }
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
      font-size: 0.5625rem;
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
    font-size: 0.625rem;
  }
`;
