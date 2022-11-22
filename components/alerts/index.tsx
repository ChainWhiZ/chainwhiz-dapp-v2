import React from 'react';
import RenderImage from 'components/image/renderimage';
import {
  AlertText,
  AlertContainer,
  AlertContent,
  AlertHeading,
  AlertImageWrapper,
} from './alert.styled';

export default function Alert({
  show,
  title,
  size,
  subTitle,
  closeToast,
}: {
  show: boolean;
  title: string;
  subTitle: string;
  size: 'small' | 'large';
  closeToast: () => void;
}) {
  return (
    <AlertContainer show={show} size={size}>
      <AlertImageWrapper size={size}>
        <RenderImage src="/images/notification/alert.png" alt="" />
      </AlertImageWrapper>
      <AlertContent size={size}>
        <AlertHeading size={size}>{title}</AlertHeading>
        <AlertText size={size}>{subTitle}</AlertText>
      </AlertContent>
      <span onClick={closeToast}>
        <RenderImage src="/images/notification/closealert.svg" alt="" />
      </span>
    </AlertContainer>
  );
}
