import styled from "styled-components";

interface PropTypes {
    size?: string;
    width?: string;
}

export const AlertContainer = styled.div`
    position: fixed;
    width: 25vw;
    top: 20px;
    right: 20px;
    padding: 15px;
    border-radius: 10px;
    z-index: 9999;
    background-color: #1E1C30;
`;

export const AlertContent = styled.div<PropTypes>`
    display: flex;
    justify-content: space-between;
    ${(props)=> props.size === "small" ? '' : `margin-bottom: 10px`};
`;

export const AlertImageWrapper = styled.div<PropTypes>`
    border-radius: 10px;
    position: relative;
    height: ${(props) => props.size === "small" ? '3rem' : '4rem'};
    width: ${({ width }: {width?:string}) => width || ''};

    img{
        border-radius: 5px;
        object-fit: cover;
    }
`

export const AlertHeading = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: #FFFFFF;
    padding-bottom: 5px;

`;

export const AlertText = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    color: #898989;
`;