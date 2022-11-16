import React from "react"
import RenderImage from "components/image/renderimage"
import { CloseImage } from "./assets"
import { AlertText, AlertContainer, AlertContent, AlertHeading, AlertImageWrapper } from "./alert.styled"

function AlertSmall({ setToast, size }: {setToast: React.Dispatch<React.SetStateAction<boolean>>, size: string}) {
    return (
        <AlertContainer>
            <AlertContent size={size}>
                <AlertImageWrapper width={'4rem'} size={size}>
                    <RenderImage src={"/images/alerts/alert.png"} alt="" />
                </AlertImageWrapper>

                <div style={{margin: '0px 1rem'}}>
                    <AlertHeading>Viola! New levels unlocked.</AlertHeading>
                    <AlertText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies est libero...</AlertText>
                </div>

                <AlertImageWrapper>
                    <span onClick={() => setToast(false)}><CloseImage /></span>
                </AlertImageWrapper>
            </AlertContent>
        </AlertContainer>
    )
}

function AlertLarge({ setToast }: {setToast: React.Dispatch<React.SetStateAction<boolean>>}){
    return (
        <AlertContainer>
            <AlertContent>
                <AlertImageWrapper width={'4rem'}>
                    <RenderImage src={"/images/alerts/alert.png"} alt="" />
                </AlertImageWrapper>

                <AlertImageWrapper>
                    <span onClick={() => setToast(false)}><CloseImage /></span>
                </AlertImageWrapper>
            </AlertContent>
            <AlertHeading>Viola! New levels unlocked.</AlertHeading>
            <AlertText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies est libero, feugiat mattis neque aliquet euismod.Maecenas pretium facilisis mauris vel tincidunt.</AlertText>
        </AlertContainer>
    )
}

export default function Alert({ setToast, size }: {setToast: React.Dispatch<React.SetStateAction<boolean>>, size: string}) {

    return (
        <div>
            {size === "small" ? <AlertSmall setToast={setToast} size={size} /> : <AlertLarge setToast={setToast} />}
        </div>
        
    )
}