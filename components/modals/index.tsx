import RenderImage from 'components/image/renderimage';
import { EmptyFunction } from 'types';
import {
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalHeading,
  ModalImageWrapper,
  ModalText,
  ModalWrapper,
} from './modal.styled';

const SUCCESS_IMAGE_PATH = '/images/notification/success.png';
const ERROR_IMAGE_PATH = '/images/notification/error.png';

export default function Modal({
  title,
  subTitle,
  onClose,
  success,
}: {
  title: string;
  subTitle: string;
  onClose: EmptyFunction;
  success: boolean;
}) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalContent>
          <ModalImageWrapper>
            <RenderImage
              src={success ? SUCCESS_IMAGE_PATH : ERROR_IMAGE_PATH}
              alt=""
            />
          </ModalImageWrapper>

          <ModalHeading success={success}>{title}</ModalHeading>
          <ModalText success={success}>{subTitle}</ModalText>

          <ModalButton onClick={onClose}>Close</ModalButton>
        </ModalContent>

        <span onClick={onClose}>
          <RenderImage src="/images/notification/closealert.svg" />
        </span>
      </ModalWrapper>
    </ModalContainer>
  );
}
