import styled from 'styled-components';
import { GlobalInputWrapper } from '../tabs.styled';
import { devices } from 'theme';

export const BasicDetailsWrapper = styled.div`
  box-sizing: border-box;
  padding: 3.375rem 3.25rem 4.3125rem;
  width: 89.375rem;
  height: 30.9375rem;
  border-radius: 1.25rem;
  // margin-top: 2.8125rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3rem;
  position: relative;

  &::after{
    content: '';
    width: 218px;
    height: 218px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: -82px;
    left: -134px;
    opacity: 0.1;
    filter: blur(6.25rem);
  }

  ${devices.mobile} {
    width: 100%;
    height: fit-content;
    padding: 0;
    gap: 0;
    margin-top: 2.5rem;
  }
`;

export const InputWrapper = styled(GlobalInputWrapper)`
  width: 37.3125rem;
  ${devices.mobile} {
    width: 20.0625rem;
  }

  &:nth-of-type(3) {
    margin-top: 0.9375rem;
  }
  &:nth-of-type(5) {
    margin-top: 0.625rem;
  }
  ${devices.mobile} {
    &:nth-of-type(2) {
      margin-top: 3.5625rem;
    }
    &:nth-of-type(3) {
      margin-top: 4.5625rem;
    }
    &:nth-of-type(4) {
      margin-top: 4.625rem;
    }
    &:nth-of-type(5) {
      margin-top: 2.4375rem;
    }
  }
`;

export const CategoryImages = styled.div`
  display: flex;
  margin-top: 0.6875rem;
  gap: 0.625rem;
  & > div {
    position: relative;
    height: 1.5rem;
    width: 7.3125rem;

    &:first-of-type {
      width: 5.3125rem;
    }

    &:last-of-type {
      width: 5.875rem;
    }
  }
`;
