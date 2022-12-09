import styled from 'styled-components';
import { devices } from 'theme';


export const Submissions = styled.div`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blueFade};
  cursor: pointer;
  box-sizing: border-box;
  width: 37.125rem;
  height: 6.188rem;
  border-radius: .625rem;
  display: flex;
  align-items: center;
  padding: 1.25rem 1.875rem;
  gap: 1.4375rem;

  ${devices.mobile} {
    width: 19.5rem;
    height: 6.1875rem;
    gap: 1.875rem;
    padding: 1.5625rem .875rem 1.75rem 2.1875rem;
  }
`;


export const AvatarWrapper = styled.div`
  position: relative;
  height: 3.75rem;
  width: 3.75rem;
  ${devices.mobile} {
    width: 2.875rem;
    height: 2.875rem;
  }
`;

export const SubmissionTextDetails = styled.div`
  margin-left: 1.438rem;
  ${devices.mobile} {
    margin-left: 0;
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