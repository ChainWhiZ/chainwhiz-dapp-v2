import styled from 'styled-components';

interface PropTypes {
  size?: string;
}

export const AlertContainer = styled.div<PropTypes>`
  position: fixed;
  background-color: #1e1c30;
  z-index: 10;
  top: 20px;
  right: 20px;
  border-radius: 10px;
  padding: ${(props) =>
    props.size === 'small' ? '25px 26px' : '18px 27px 34px'};
  width: 427px;
  display: flex;
  gap: ${(props) => (props.size === 'small' ? '17px' : '23.69px')};
  box-sizing: border-box;
  flex-direction: ${(props) => (props.size === 'small' ? 'row' : 'column')};
  span {
    height: 13px;
    width: 13px;
    right: 34.37px;
    top: 31.33px;
    position: absolute;
    cursor: pointer;
  }
`;

export const AlertContent = styled.div<PropTypes>`
  display: flex;
  gap: ${(props) => (props.size === 'small' ? '7px' : '10px')};
  flex-direction: column;
  justify-content: space-between;
  max-width:  ${(props) => (props.size == 'small' ? '275px' : '344px')};
`;

export const AlertImageWrapper = styled.div<PropTypes>`
  border-radius: 10px;
  position: relative;
  height: ${(props) => (props.size === 'small' ? '54.63px' : '92.62px')};
  width: ${(props) => (props.size === 'small' ? '54.63px' : '92.62px')};

  img {
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const AlertHeading = styled.div<PropTypes>`
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  font-family: ${(props) => props.theme.fonts.primaryFontMedium};
  color: white;
  font-size: ${(props) => (props.size === 'small' ? '16px' : '20px')};
  line-height: 20px;
`;

export const AlertText = styled.div<PropTypes>`
  display: flex;
  color: #898989;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.01em;
`;
