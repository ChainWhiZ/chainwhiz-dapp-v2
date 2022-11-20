import styled from 'styled-components';
import { GlobalInputWrapper } from '../tabs.styled';
import { devices } from 'theme';

export const ConfirmBountyWrapper = styled.div`
  box-sizing: border-box;
  padding: 2.5rem 3rem;
  margin-top: 2.625rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5.625rem;
  height: 36.75rem;
  
  ${devices.mobile} {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 2.1875rem;
    max-width: 321px;
    height: fit-content;
    padding-bottom: 0px;
  }
`;

export const InputWrapper = styled(GlobalInputWrapper)<{ text?: string }>`
  position: relative;
  section {
    label {
      font-size: 1.125rem;
      line-height: 1.6875rem;
      br {
        display: none;
      }
      ${devices.mobile} {
        font-size: 0.75rem;
        line-height: 1.125rem;
        br {
          display: none;
        }
      }
    }
  }
  input[type='text'],
  input[type='number'] {
    width: 12rem;
    ${devices.mobile} {
      width: 148px;
      &.winners {
        width: 127px;
      }
    }
  }
  &::after {
    color: #a29898;
    font-style: italic;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.125rem;
    content: '${(props) => props.text}';
    position: absolute;
    bottom: 0.625rem;
    left: 4.6875rem;
    width: 6.25rem;
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
    ${devices.mobile} {
      left: 1.8875rem;
    }
  }
`;

export const BountySection = styled.section`
  height: 100%;
`;

export const Heading = styled.div`
  margin-bottom: 2.1875rem;
  ${devices.mobile} {
    margin-bottom: 2.9375rem;
  }
  h3 {
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.primaryFontSemibold};
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-bottom: 0.3125rem;
    ${devices.mobile} {
      font-size: 0.75rem;
      line-height: 1.125rem;
      margin-bottom: 0.25rem;
    }
  }
  h5 {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #a29898;
    ${devices.mobile} {
      font-size: 10px;
      line-height: 15px;
    }
  }
`;

export const BountyFeeBreakdown = styled.div`
  & > div {
    display: flex;
    gap: 4.125rem;
    position: relative;
    align-items: flex-end;
    ${devices.mobile} {
      gap: 0;
      justify-content: space-between;
      align-items: flex-end;
    }

    &::after {
      content: 'x';
      display: block;
      position: absolute;
      color: white;
      font-size: 6.25rem;
      font-size: 1.375rem;
      line-height: 2.0625rem;
      right: 20rem;
      bottom: 0.3125rem;
      ${devices.mobile} {
        right: 9.1rem;
      }
    }
  }
  & > section {
    margin-top: 2.25rem;
  }
`;

export const AmountPaid = styled.div`
  & > h4 {
    display: none;
    ${devices.mobile} {
      display: block;
      font-size: 0.75rem;
      line-height: 1.125rem;
      color: #ffffff;
      margin-top: 47px;
      margin-bottom: 10px;
    }
  }
  & > section {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-bottom: 0.6875rem;
    ${devices.mobile} {
      /* flex-direction: column; */
      align-items: end;
      gap: 10px;
    }
    & > div {
      display: flex;
      align-items: flex-end;
      gap: 0.75rem;

      span {
        color: #a29898;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.3125rem;
      }
    }
    & > section {
      display: flex;
      align-items: center;
      ${devices.mobile} {
        flex-direction: column;
      }
      h4 {
        font-size: 1.25rem;
        line-height: 1.875rem;
        color: ${(props) => props.theme.colors.white};
        display: flex;
        align-items: center;
        ${devices.mobile} {
          display: none;
        }
      }
      br {
        display: none;
        ${devices.mobile} {
          display: block;
        }
      }
      span {
        font-size: 1.875rem;
        line-height: 2.8125rem;
        color: ${(props) => props.theme.colors.neonGreen};
        font-family: ${(props) => props.theme.fonts.primaryFontSemiBold};
        display: inline-block;
        margin-left: 0.4375rem;
        ${devices.mobile} {
          font-size: 30px;
          line-height: 45px;
          margin-left: 0;
        }
      }
    }
  }
  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #a29898;
    br{
      display: none;
    }
    ${devices.mobile} {
      margin-top: 20px;
      font-size: 12px;
      line-height: 18px;
      color: #a29898;
      br{
        display: block;
      }
    }
  }
`;

export const WalletSection = styled.div`
  margin-top: 4.25rem;
  ${devices.mobile} {
    margin-top: 56px;
  }
  h4 {
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.875rem;
    ${devices.mobile} {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 8px;
    }
  }
  div {
    display: flex;
    color: #ffffff;
    gap: 0.4375rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    ${devices.mobile} {
      font-size: 12px;
      line-height: 18px;
    }
    span {
      font-style: italic;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #d4ff1e;
      cursor: pointer;
      transition: ${(props) => props.theme.meta.fastTransitionSpeed};
      &:hover {
        opacity: 0.85;
      }
      ${devices.mobile} {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;

export const TermsCondition = styled.div`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  margin-top: 4.4375rem;
  margin-bottom: 1.625rem;
  font-size: 1rem;
  line-height: 1.25rem;
  ${devices.mobile} {
    font-size: 12px;
    line-height: 20px;
    margin-top: 47px;
    margin-bottom: 27px;
  }
  p {
    span {
      text-decoration: underline;
    }
  }
`;

export const PostBounty = styled.div`
  background: ${(props) => props.theme.colors.neonGreen};
  transition: ${(props) => props.theme.meta.fastTransitionSpeed};
  width: 12.25rem;
  height: 3rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  border-radius: 0.625rem;
  color: #131313;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
  ${devices.mobile} {
    width: 145px;
    height: 33.48px;
    font-size: 12.3592px;
    line-height: 16px;
    border-radius: 3px;
  }
`;
