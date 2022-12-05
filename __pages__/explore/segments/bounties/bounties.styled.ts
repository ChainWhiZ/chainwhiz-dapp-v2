import styled from 'styled-components';
import { devices } from 'theme';

export const BountiesWrapper = styled.div`
    max-width: 85rem;
    margin: auto;
    margin-bottom: 7.125rem;
`

export const BountiesContent = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 1.813rem;
    grid-column-gap: 3.313rem;

    ${devices.mobile} {
        grid-template-columns: auto;
        place-items: center;
    }
`

