import styled from 'styled-components';

export const ToastContainer = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  background-color: #1e1c30;
  box-sizing: border-box;
  position: fixed;
  border-radius: 0.625rem;
  z-index: 3;
  top: 1.25rem;
  right: 1.25rem;
  width: 23.4375rem;
  padding: 1.9375rem;
  padding-bottom: 2.1875rem;
`;

export const ToastContent = styled.div``;

export const ToastImageWrapper = styled.div`
  border-radius: 0.625rem;
  position: relative;
  height: 8.5625rem;
  width: 100%;
  margin-bottom: 2.125rem;

  span {
    cursor: pointer;
    position: absolute;
    right: -0.5rem;
    top: -0.625rem;
    width: 2rem;
    height: 2rem;
  }
`;

export const ToastHeading = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25rem;
  letter-spacing: 0.01em;
`;

export const ToastText = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.01em;
  color: #898989;
  margin-top: 0.875rem;
  margin-bottom: 1.125rem;
`;

export const ToastButton = styled.button<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  background-color: #d4ff1e;
  border: none;
  outline: none;
  color: #000000;
  cursor: pointer;
  border: 2px solid #d4ff1e;
  border-radius: .625rem;
  width: 7.375rem;
  height: 2.5625rem;
  font-size: .875rem;
  line-height: 1.3125rem;

  &:hover {
    opacity: 0.85;
  }
`;
