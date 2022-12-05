import styled from 'styled-components';
import { devices } from 'theme';

export const HeaderWrapper = styled.div`

    ${devices.mobile} {
        margin-top: 1.625rem;
        overflow: hidden;
    }
`

export const HeaderContent = styled.div`
    max-width: 93.625rem;
    margin: 1.875rem auto;
    margin-top: 6.063rem;
    display: flex;
    justify-content: space-between;

    ${devices.mobile} {
        flex-direction: column;
        gap: 2rem;
    }
`

export const HeaderSection1 = styled.div``

export const HeaderTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;

    ${devices.mobile} {
        justify-content: center;
        gap: 0.438rem;
    }

    h1 {
        font-weight: 400;
        font-size: 2rem;
        line-height: 3rem;
        color: #FFFFFF;

        ${devices.mobile} {
            font-size: 1.375rem;
            line-height: 2.063rem;
        }
    }

    div {
        align-self: center;
    }

    button {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        align-self: center;
        padding: 0.313rem 1.875rem;
        background-color: #1E1C30;
        border: none;
        border-radius: 1.25rem;
        color: #FFFFFF;
        font-size: 1rem;
        line-height: 1.375rem;

        ${devices.mobile} {
            justify-content: center;
            width: 1rem;
            height: 1.375rem;
            padding: 0.313rem 0.125rem;
            font-size: 0.75rem;
            line-height: 1.063rem;
            border-radius: 0.313rem;
        }

        div {
            position: relative;
            width: 0.2rem;
            height: 0.615rem;
            object-fit: contain;
            color: #FFFFFF;
        }
    
        span {
            ${devices.mobile} {
                display: none;
            }
        }
    }

`

export const HeaderDescription = styled.div`
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.688rem;
    color: #898989;

    ${devices.mobile} {
        font-size: 0.625rem;
        line-height: 0.938rem;
        text-align: center;
    }

    span {
        color: #D4FF1E;
    }
`

export const HeaderSection2 = styled.div`
    display: flex;

    ${devices.mobile} {
        justify-content: center;
        gap: 0.5rem;
    }
`

export const HeaderSearch = styled.div`
    display: flex;

    form {
        display: flex;
        align-items: center;
        border-radius: 1.25rem;
        padding: 0rem 1.875rem;

        ${devices.mobile} {
            padding: 0;
            border-radius: 0.313rem;
        }

        button {
            width: 3rem;
            height: 3.625rem;
            padding: 0 1rem;
            object-fit: contain;
            background-color: #1E1C30;
            border: #1E1C30;
            border-radius: 0.625rem 0 0 0.625rem;

            ${devices.mobile} {
                width: 2.625rem;
                height: 2.75rem;
                border-radius: 0.313rem 0 0 0.313rem;
            }
    
            div {
                position: relative;
                display: flex;
                justify-items: center;
                align-items: center;
                width: 1.163em;
                height: 1.163rem;
                object-fit: contain;
                color: #FFFFFF;
    
                ${devices.mobile} {
                    width: 0.634rem;
                    height: 0.634rem;
                }
            }
        }
    }
`

export const HeaderSearchBar = styled.input`
    width: 24.625rem;
    height: 3.625rem;
    padding: 0;
    background-color: #1E1C30;
    border: none;
    color: #FFFFFF;
    font-size: 1rem;
    line-height: 1.25rem;
    border-radius: 0 0.625rem 0.625rem 0;

    ${devices.mobile} {
        width: 13.875rem;
        height: 2.75rem;
        font-size: 0.75rem;
        line-height: 0.938rem;
        border-radius: 0 0.313rem 0.313rem 0;
    }

    &::placeholder {
        color: #FFFFFF;
    }
`

export const HeaderFilter = styled.div`
    align-self: center;

    div {
        display: flex;
        align-items: center;
        margin: auto;
        position: relative;
        width: 3.813rem;
        height: 3.625rem;
        background-color: #1E1C30;
        border-radius: 0.625rem;

        ${devices.mobile} {
            width: 2.938rem;
            height: 2.75rem;
            border-radius: 0.313rem;
        }

        div {
            position: relative;
            width: 1.313em;
            height: 1.125rem;
            color: #FFFFFF;
    
            ${devices.mobile} {
                width: 0.938rem;
                height: 0.938rem;
            }
        }

        span {
            content: "";
            position: absolute;
            top: -0.125rem;
            right: -0.125rem;
            width: 0.75rem;
            height: 0.75rem;
            background-color: #D4FF1E;
            border-radius: 50%;
    
            ${devices.mobile} {
                top: -0.063rem;
                right: -0.063rem;
                width: 0.578rem;
                height: 0.578rem;
            }
        }
    }
`