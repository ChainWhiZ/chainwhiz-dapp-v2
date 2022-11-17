import RenderImage from "components/image/renderimage";
import { CloseImage } from "./assests";
import { ModalButton, ModalContainer, ModalContent, ModalHeading, ModalImageWrapper, ModalText } from "./modal.styled";


function SuccessModal({ setToast, success }: {setToast: React.Dispatch<React.SetStateAction<boolean>>, success: boolean}) {
  return (
    <ModalContainer>
        <ModalContent padding="0 1.5rem">
            <ModalImageWrapper>
                <RenderImage src={"/images/modals/success.png"} alt="" />
            </ModalImageWrapper>

            <ModalHeading success={success}>Bounty posted succesfully</ModalHeading>
            <ModalText success={success}>#chainwiz_first_bounty</ModalText>

            <ModalButton><span onClick={() => setToast(false)}>Close</span></ModalButton>
        </ModalContent>

        <ModalContent>
            <span onClick={() => setToast(false)}><CloseImage /></span>
        </ModalContent>
    </ModalContainer>
  );
}

function ErrorModal({ setToast, success }: {setToast: React.Dispatch<React.SetStateAction<boolean>>, success: boolean}) {
    return (
        <ModalContainer>
        <ModalContent padding="0 1.5rem">
            <ModalImageWrapper>
                <RenderImage src={"/images/modals/error.png"} alt="" />
            </ModalImageWrapper>

            <ModalHeading success={success}>Oops..something is wrong</ModalHeading>
            <ModalText success={success}>Error code: Q54545SSDD5</ModalText>

            <ModalButton><span onClick={() => setToast(false)}>Close</span></ModalButton>
        </ModalContent>

        <ModalContent>
            <span onClick={() => setToast(false)}><CloseImage /></span>
        </ModalContent>
    </ModalContainer>
    )
}

export default function Modal({ setToast, success }: {setToast: React.Dispatch<React.SetStateAction<boolean>>, success: boolean}) {

    return (
        <div>
            {success ? <SuccessModal setToast={setToast} success={success} /> : <ErrorModal setToast={setToast} success={success} />}
        </div>
        
    )
}