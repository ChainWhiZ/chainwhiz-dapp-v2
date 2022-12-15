import styled from 'styled-components';
import { devices } from 'theme';

export const MenuContainer = styled.div`
  position: absolute;
  top: 3rem;
  background-color: #161422;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 0.625rem;
  font-weight: 400;
  width: 10.813rem;
  height: 8.563rem;
  gap: 1.688rem;
  font-size: 1.25rem;

  ${devices.mobile} {
    z-index: 1;
    top: 2rem;
  }
`;

export const MenuActive = styled.div`
  display: flex;
  align-items: center;

  .mark{
    width: 0.656rem;
    height: 0.469rem;
    margin-right: 0.797rem;
    background-color: black;
    background-size: 100%;
  }

  &:hover {
    color: #d4ff1e;
  }
`;

export const MenuCompleted = styled.div`
  &:hover {
    color: #d4ff1e;
  }
`;
