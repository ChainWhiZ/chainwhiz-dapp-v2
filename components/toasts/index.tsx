import RenderImage from "components/image/renderimage";
import { CloseEllipse, CloseIcon } from "./assests";
import { ToastContainer, ToastContent, ToastHeading, ToastImageWrapper, ToastText, ToastButton } from "./toast.styled";

export default function Toast({ setToast, button }: {setToast: React.Dispatch<React.SetStateAction<boolean>>, button: boolean}) {

    return (
        <ToastContainer>
            <ToastContent>
                <ToastImageWrapper>
                    <RenderImage src={"/images/toasts/toast.png"} alt="" />
                    <span onClick={() => setToast(false)}>
                        <CloseEllipse/>
                        <span><CloseIcon/></span>
                    </span>
                </ToastImageWrapper>
                <ToastHeading>Viola! New levels unlocked.</ToastHeading>
                <ToastText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies est libero, feugiat mattis neque aliquet euismod. Maecenas pretium facilisis mauris vel tincidunt.</ToastText>
            </ToastContent>

            {button && <span><ToastButton>Read more</ToastButton></span>}

        </ToastContainer>
        
    )
}