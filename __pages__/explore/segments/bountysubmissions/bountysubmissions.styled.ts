import styled from 'styled-components';
import { devices } from 'theme';

export const SubBounty = styled.div`
  border-top: .0625rem solid rgba(137, 137, 137, 0.5);
  width: 87.9375rem;
  margin-top: 4.6875rem;
  padding-top: 5.875rem;
  margin-bottom: 3.6875rem;

  ${devices.mobile} {
    width: 20rem;
    margin-top: 5.0625rem;
    margin-bottom: 3.5625rem;
    padding-top: 3.75rem;
  }
`;

export const SubmissionsTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.375rem;
  line-height: 2.0625rem;
  ${devices.mobile} {
    font-size: 1.125rem;
    line-height: 1.6875rem;
  }
`;

export const SubmissionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 3.5rem;
  row-gap: 1.875rem;
  max-width: 77.75rem;
  margin-top: 2.125rem;
  ${devices.mobile} {
    gap: .9375rem;
    max-width: unset;
    margin-top: 2.3125rem;
  }
`;
