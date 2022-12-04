import styled from 'styled-components';

interface PropTypes {
  size?: string;
  show?: boolean;
}

export const AlertContainer = styled.div<PropTypes>`
  position: fixed;
  background-color: #1e1c30;
  z-index: 10;
  top: 1.25rem;
  right: 1.25rem;
  border-radius: .625rem;
  padding: ${(props) =>
    props.size === 'small' ? '1.5625rem 1.625rem' : '1.125rem 1.6875rem 2.125rem'};
  width: 26.6875rem;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  gap: ${(props) => (props.size === 'small' ? '1.0625rem' : '1.4806rem')};
  box-sizing: border-box;
  flex-direction: ${(props) => (props.size === 'small' ? 'row' : 'column')};
  span {
    height: .8125rem;
    width: .8125rem;
    right: 2.1481rem;
    top: 1.9581rem;
    position: absolute;
    cursor: pointer;
  }
`;

export const AlertContent = styled.div<PropTypes>`
  display: flex;
  gap: ${(props) => (props.size === 'small' ? '.4375rem' : '.625rem')};
  flex-direction: column;
  justify-content: space-between;
  max-width: ${(props) => (props.size == 'small' ? '17.1875rem' : '21.5rem')};
`;

export const AlertImageWrapper = styled.div<PropTypes>`
  border-radius: .625rem;
  position: relative;
  height: ${(props) => (props.size === 'small' ? '3.4144rem' : '5.7888rem')};
  width: ${(props) => (props.size === 'small' ? '3.4144rem' : '5.7888rem')};

  img {
    border-radius: .3125rem;
    object-fit: cover;
  }
`;

export const AlertHeading = styled.div<PropTypes>`
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  color: white;
  font-size: ${(props) => (props.size === 'small' ? '1rem' : '1.25rem')};
  line-height: 1.25rem;
`;

export const AlertText = styled.div<PropTypes>`
  display: flex;
  color: #898989;
  align-items: center;
  font-size: .75rem;
  line-height: 1.25rem;
  letter-spacing: 0.01em;
`;
