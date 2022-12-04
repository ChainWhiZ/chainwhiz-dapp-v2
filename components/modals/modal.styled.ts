import styled from 'styled-components';

interface PropTypes {
  padding?: string;
  success?: boolean;
}

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 46rem;
  height: 37.9375rem;
  background: #161422;
  text-align: center;
  box-sizing: border-box;
  padding-top: 4.8125rem;
  padding-bottom: 3.3125rem;
  position: relative;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  & > span {
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    top: 3.1106rem;
    right: 3.9906rem;
    cursor: pointer;
    &:hover {
      transform: scale(0.95);
    }
  }
`;

export const ModalContent = styled.div<PropTypes>`
  margin: auto;
  width: fit-content;
`;

export const ModalImageWrapper = styled.div`
  border-radius: .625rem;
  position: relative;
  height: 20.25rem;
  width: 20.25rem;
  margin: auto;

  &::after {
    width: 9.625rem;
    height: 9.625rem;
    background: #d4ff1e;
    opacity: 0.4;
    filter: blur(6.25rem);
    content: '';
    position: absolute;
    top: 7.8125rem;
    right: 4.375rem;
  }

  img {
    border-radius: .625rem;
    object-fit: contain;
  }
`;

export const ModalHeading = styled.div<PropTypes>`
  color: ${({ success }: { success?: boolean }) =>
    success ? '#D4FF1E' : '#FFFFFF'};
  font-family: ${(props) => props.theme.fonts.primaryFontSemiBold};
  font-size: 2.0625rem;
  line-height: 3.125rem;
  margin-bottom: 1.25rem;
`;

export const ModalText = styled.div<PropTypes>`
  color: ${({ success }: { success?: boolean }) =>
    success ? '#FFFFFF' : '#FF6C6C'};
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  font-size: 1.375rem;
  line-height: 1.25rem;
  line-height: 1.25rem;
  letter-spacing: 0.01em;
`;

export const ModalButton = styled.button`
  margin-top: 2.125rem;
  width: 5rem;
  height: 2.5625rem;
  background-color: #d4ff1e;
  border: .125rem solid #d4ff1e;
  border-radius: .625rem;
  font-size: .75rem;
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  color: #000000;
  cursor: pointer;
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  &:hover {
    opacity: 0.85;
  }
`;
