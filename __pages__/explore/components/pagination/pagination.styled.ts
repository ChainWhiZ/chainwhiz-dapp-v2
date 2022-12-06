import styled from 'styled-components';
import { devices } from 'theme';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  ${devices.mobile} {
    width: fit-content;
    margin: auto;
  }
`;

export const PaginationContent = styled.p`
  display: inline-block;
  color: white;
  margin: 0 15px;
  font-size: 18px;

  span {
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  }
  ${devices.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const PaginationButton = styled.div<{ icon: string }>`
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  background-color: ${(props) => props.theme.colors.blueFade};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  width: 1.625rem;
  height: 1.625rem;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 0.7;
  }

  &::after {
    content: '';
    background-image: url(${(props) => props.icon});
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 16px;
    height: 16px;
  }
`;
