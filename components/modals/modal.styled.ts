import styled from "styled-components";

interface PropTypes {
    padding?: string;
    success?: boolean;
}

export const ModalContainer = styled.div`
    position: fixed;
    top: 22rem;
    right: 42rem;
    padding: 2rem;
    padding-bottom: 2rem;
    z-index: 9999;
    background-color: #161422;
    display: flex;
    justify-content: space-between;
`

export const ModalContent = styled.div<PropTypes>`
    text-align: center;
    padding: ${({ padding }: {padding?:string}) => padding || ''};
`

export const ModalImageWrapper = styled.div`
    border-radius: 10px;
    position: relative;
    height: 15rem;
    width: 100%;

    img{
        border-radius: 10px;
        object-fit: contain;
    }

    span{
        font-size: 1.5rem;
    }
`

export const ModalHeading = styled.div<PropTypes>`
    color: ${({ success }: {success?:boolean}) => success ? '#D4FF1E' : '#FFFFFF'};
    font-weight: 600;
    font-size: 2rem;
    line-height: 50px;
    margin-bottom: 1rem;
`

export const ModalText = styled.div<PropTypes>`
    color: ${({ success }: {success?:boolean}) => success ? '#FFFFFF' : '#FF6C6C'};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 20px;
`

export const ModalButton = styled.button`
    margin-top: 1.5rem;
    background-color: #D4FF1E;
    border: 2px solid #D4FF1E;
    border-radius: 10px;
    padding: 8px 16px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #000000;
    cursor: pointer;
`