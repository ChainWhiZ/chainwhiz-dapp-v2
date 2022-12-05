import styled from 'styled-components';
import theme from 'theme';
import { devices } from 'theme';

export const BountyWrapper = styled.div`
    width: 36.125rem;
    height: 13.813rem;
    padding: 1.4375rem 1.9375rem 1.25rem 2.1875rem;

    background: #1e1c30;
    border-radius: 1.25rem;
    cursor: pointer;

    ${devices.mobile} {
        //width: 20rem /* 320px -> 20rem */;
        height: 12.5rem /* 200px -> 12.5rem */;
        border-radius: 1.25rem /* 20px -> 1.25rem */;
        padding: 1.4375rem /* 23px -> 1.4375rem */ 1.375rem /* 22px -> 1.375rem */ 1.375rem /* 22px -> 1.375rem */ 1.6875rem /* 27px -> 1.6875rem */;
    }
`

export const BountyContent = styled.div``

export const BountyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.625rem 0;

    .bounty__chain {
        width: 4.875rem;
        height: 1.0625rem;

        ${devices.mobile} {
            width: 4.875rem /* 78px -> 4.875rem */;
            height: 1.0625rem /* 17px -> 1.0625rem */;
            margin-bottom: .875rem /* 14px -> .875rem */;
        }
    }
`

export const BountyStatus = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    div {
        position: relative;
        width: 0.625rem;
        object-fit: contain;
    }

    span {
        color: #D4FF1E;
        font-weight: 400;
        font-size: 0.625rem;
        line-height: 1.375rem;
    }
`

export const BountyMeta = styled.div`
    display: flex;
    justify-content: space-between;

    .bounty__meta__avatar {
        width: 1.375rem;
        height: 1.375rem;
        overflow: hidden;
        border-radius: 50%;
        background-color: ${theme.colors.lightGrey};

        ${devices.mobile} {
            width: 1.375rem /* 22px -> 1.375rem */;
            height: 1.375rem /* 22px -> 1.375rem */;
        }
    }

    h4 {
        max-width: 22.25rem;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.6875rem;
        color: white;
        margin-bottom: 0.375rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
  
        ${devices.mobile} {
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.313rem;
        }
    }
    p {
        max-width: 15.625rem;
        font-weight: 400;
        font-size: .875rem;
        line-height: 1.375rem;
        color: ${theme.colors.lightGrey};
        margin-bottom: 1.438rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
  
        ${devices.mobile} {
            font-size: 0.75rem;
            line-height: 1.375rem;
            margin-bottom: 1.625rem /* 26px -> 1.625rem */;
        }
    }
}
`

export const BountyBorder = styled.div`
    height: 0.063rem;
    margin: auto;
    background-color: #898989;
    opacity: 0.2;
    margin-bottom: 1.25rem;
`

export const BountyText = styled.div`
    display: flex;
    justify-content: space-between;
  
    span {
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.5rem;
        color: white;
  
        ${devices.mobile} {
          font-weight: 500;
          font-size: .75rem /* 12px -> .75rem */;
          line-height: 1.125rem /* 18px -> 1.125rem */;
        }
    }

    h4 {
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.688rem;
        color: white;
    }

    p {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.125rem;
        color: #898989;
    }
`