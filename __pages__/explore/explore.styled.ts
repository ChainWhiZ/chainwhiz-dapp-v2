import styled from 'styled-components';
import theme from 'theme';
import { devices } from 'theme';

export const ExploreWrapper = styled.div`
    background-color: ${theme.colors.homeBackground};
    overflow-x: hidden;

    &::after {
        content: '';
        filter: blur(100px);
        position: absolute;
        width: 10.5rem /* 168px -> 10.5rem */;
        height: 10.5rem /* 168px -> 10.5rem */;
        background: ${theme.colors.neonGreen};
        opacity: 0.5;
        transform: rotate(180deg);
        z-index: 2;
        top: 0;
        right: 6.9063rem /* 110.5px -> 6.9063rem */;
        ${devices.mobile} {
            display: none;
        }
    }

    &::before {
        content: '';
        filter: blur(100px);
        position: absolute;
        width: 10.5rem /* 168px -> 10.5rem */;
        height: 10.5rem /* 168px -> 10.5rem */;
        background: ${theme.colors.neonGreen};
        opacity: 0.5;
        transform: rotate(180deg);
        z-index: 2;
        top: 0;
        left: 9.5313rem /* 152.5px -> 9.5313rem */;
        ${devices.mobile} {
            left: calc(50% - 84px); //center it to the screen. 84 = 168/2
        }
    }
`