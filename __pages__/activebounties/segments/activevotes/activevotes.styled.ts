import styled from 'styled-components';
import { devices } from 'theme';

export const ActivevotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.313rem;
  width: 75.563rem;

  ${devices.mobile} {
    flex-direction: column;
    width: 20rem;
    gap: 2.438rem;
  }
`;
