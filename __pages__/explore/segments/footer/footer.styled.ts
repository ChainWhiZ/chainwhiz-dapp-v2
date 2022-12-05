import styled from 'styled-components';
import { devices } from 'theme';

// ---- wrappers section
export const FooterWrapper = styled.div`
    margin: 6.063rem auto;

    ${devices.mobile} {
        margin: 4.375rem 0;
    }

    &::before {
        content: '';
        filter: blur(100px);
        position: absolute;
        width: 11rem;
        height: 11rem;
        background: white;
        opacity: 0.5;
        transform: rotate(180deg);
        z-index: 2;
        margin: 0 auto;
        margin-top: 6rem;
        right: 0;
        left: 0;

        ${devices.mobile} {
            margin-top: 0;
        }
    }
`

export const FooterContent = styled.div`
    text-align: center;
`

export const FooterSection1 = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.125rem 0;

    div {
        position: relative;
    }

    ${devices.mobile} {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0.625rem 1.25rem;
    }
`

export const FooterImage1 = styled.div`
    margin: 0 2.188rem;
    align-self: center;
    width: 4.75rem;
    height: 4.75rem;
    object-fit: contain;

    ${devices.mobile} {
        width: 3.234rem;
        height: 3.234rem;
    }
`

export const FooterImage2 = styled.div`
    width: 9.625rem;
    height: 9.625rem;
    object-fit: contain;

    ${devices.mobile} {
        width: 6.553rem;
        height: 6.553rem;
    }
`

export const FooterImage3 = styled.div`
    margin: 0 1.188rem;
    width: 5.75rem;
    height: 5.75rem;
    object-fit: contain;

    ${devices.mobile} {
        width: 3.915rem;
        height: 3.915rem;
    }
`

export const FooterSection2 = styled.div`
    margin: 1.5rem 0;
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 2.063rem;
    color: #FFFFFF;

    ${devices.mobile} {
        margin: auto;
        width: 16.375rem;
        font-size: 0.75rem;
        line-height: 1.125rem;
    }

`