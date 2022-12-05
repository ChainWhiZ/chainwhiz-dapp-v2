import styled from 'styled-components';
import { devices } from 'theme';

// ---- wrappers section
export const CategoryWrapper = styled.div`
    color: #FFFFFF;
`

export const CategoryContent = styled.div`
    max-width: 85rem;
    margin: 3.375rem auto;
    display: flex;
    justify-content: space-between;

    ${devices.mobile} {
        margin: 3.375rem 1.25rem;
        gap: 1.25rem;
    }
`

export const CategoryText = styled.div`
    align-self: center;
    padding: 0.625rem 0rem;
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 2.063rem;

    ${devices.mobile} {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`

export const CategorySelect = styled.div`
    padding: 0.625rem 2.5rem;
    background-color: #1E1C30;
    border-radius: 0.625rem;
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 2.063rem;
    color: #D4FF1E;

    ${devices.mobile} {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0.625rem 1.25rem;
    }
`