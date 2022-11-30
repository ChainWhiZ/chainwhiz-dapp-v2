import styled from 'styled-components';
import { GlobalInputWrapper } from '../../post/tabs/tabs.styled';
import { devices } from 'theme';

export const SubmissionContainer = styled.div`
  color: #ffffff;
  display: flex;
`;

export const DisplaySub = styled.div`
  margin-top: 2.125rem;
  cursor: pointer;
  width: 37.125rem;
  height: 6.188rem;
  background: #1e1c30;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.188rem;

  aside {
    padding-left: 1.875rem;
  }

  main {
    margin-left: 1.438rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
    color: #898989;
    margin-top: 0.375rem;
  }
`;

export const PaginationContainer = styled.div`
  // display: flex;
  // align-items: center;
  margin-top: 3.688rem;
  `;
  
  export const PaginationWrapper = styled.div`
  display: block;
  align-items: center;
  div {
    font-size: 1.125rem;
    color: #ffffff;
    margin: 0;
    padding: 0;
    display: block;
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
