import RenderImage from 'components/image/renderimage';
import {
  ToastContainer,
  ToastContent,
  ToastHeading,
  ToastImageWrapper,
  ToastText,
  ToastButton,
} from './toast.styled';

export default function Toast({
  show,
  title,
  subTitle,
  closeToast,
  onAction,
}: {
  show: boolean;
  title: string;
  subTitle: string;
  closeToast: () => void;
  onAction?: undefined | (() => void);
}) {
  return (
    <ToastContainer show={show}>
      <ToastContent>
        <ToastImageWrapper>
          <RenderImage src="/images/notification/toast.png" alt="" />
          <span onClick={closeToast}>
            <RenderImage src="/images/notification/closetoast.svg" />
          </span>
        </ToastImageWrapper>
        <ToastHeading>{title}</ToastHeading>
        <ToastText>{subTitle}</ToastText>
      </ToastContent>

      <ToastButton onClick={onAction} show={Boolean(onAction)}>
        Read more
      </ToastButton>
    </ToastContainer>
  );
}
