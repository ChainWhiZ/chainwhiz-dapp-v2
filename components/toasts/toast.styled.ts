import styled from "styled-components";

export const ToastContainer = styled.div`
    position: fixed;
    width: 20vw;
    top: 20px;
    right: 20px;
    padding: 1rem 1.8rem;
    padding-bottom: 2rem;
    border-radius: 10px;
    z-index: 9999;
    background-color: #1E1C30;
`;

export const ToastContent = styled.div``

export const ToastImageWrapper = styled.div`
    border-radius: 10px;
    position: relative;
    height: 12rem;
    width: 100%;
    margin-bottom: 1rem;

    img{
        position: relative;
        border-radius: 10px;
        object-fit: contain;
    }

    span{
        position: absolute;
        right: 0;

        span{
            position: absolute;
            top: 15%;
            right: 30%;
        }
    }
`

export const ToastHeading = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 0.8rem;
`

export const ToastText = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    color: #898989;
`

export const ToastButton = styled.button`
    margin: 1rem 0;
    background-color: #D4FF1E;
    border: 2px solid #D4FF1E;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #000000;
    cursor: pointer;
`