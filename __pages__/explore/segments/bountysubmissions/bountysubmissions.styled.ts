import styled from 'styled-components';
import { devices } from 'theme';

export const SubBounty = styled.div`
  border-top: 1px solid rgba(137, 137, 137, 0.5);
  width: 87.9375rem;
  margin-top: 4.6875rem;
  padding-top: 94px;
  margin-bottom: 59px;

  ${devices.mobile} {
    width: 320px;
    margin-top: 81px;
    margin-bottom: 57px;
    padding-top: 60px;
  }
`;

export const SubmissionsTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
  color: ${(props) => props.theme.colors.white};
  font-size: 22px;
  line-height: 33px;
  ${devices.mobile} {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const SubmissionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 56px;
  row-gap: 30px;
  max-width: 1244px;
  margin-top: 34px;
  ${devices.mobile} {
    gap: 15px;
    max-width: unset;
    margin-top: 37px;
  }
`;
