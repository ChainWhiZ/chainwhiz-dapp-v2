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
    <AlertContainer size={size}>
      <AlertImageWrapper size={size}>
        <RenderImage src="/images/notification/alert.png" alt="" />
      </AlertImageWrapper>
      <AlertContent size={size}>
        <AlertHeading size={size}>Viola! New levels unlocked.</AlertHeading>
        <AlertText size={size}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies est libero...
        </AlertText>
      </AlertContent>
      <span>
        <RenderImage src="/images/notification/closealert.svg" alt="" />
      </span>
    </AlertContainer>
  );
}
