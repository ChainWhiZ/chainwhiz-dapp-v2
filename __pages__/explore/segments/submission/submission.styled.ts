import styled from 'styled-components';
import { devices } from 'theme';

export const SubmissionContainer = styled.div`
  color: #ffffff;
  display: flex;
`;

export const Submissions = styled.div`
  margin-top: 2.125rem;
  box-sizing: border-box;
  cursor: pointer;
  width: 37.125rem;
  height: 6.188rem;
  background: #1e1c30;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px 30px;

  aside {
    position: relative;
    height: 60px;
    width: 60px;
    ${devices.mobile} {
      width: 2.875rem;
      height: 2.875rem;
    }
  }

  main {
    margin-left: 1.438rem;

    ${devices.mobile} {
      margin-left: 0;
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;

    ${devices.mobile} {
      font-size: 0.75rem;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
    color: #898989;
    margin-top: 0.375rem;

    ${devices.mobile} {
      font-size: 0.875rem;
    }
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 3.688rem;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;

  ${devices.mobile} {
    display: flex;
  }
  div {
    font-size: 1.125rem;
    color: #ffffff;
    margin: 0;
    padding: 0;
    display: block;

    ${devices.mobile} {
      font-size: 0.875rem;
    }
  }
  p {
    font-weight: 700;
    display: inline-block;
    margin: 0 5px;
  }

  aside {
    padding: 5px;
    background-color: #1e1c30;
    width: 1.625rem;
    height: 1.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
`;
