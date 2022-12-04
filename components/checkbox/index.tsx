import Image from 'next/image';
import React from 'react';
import {
  CheckboxContainer,
  CheckBoxWrapper,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './checkbox.styled';

const Checkbox = ({
  label,
  className,
  checked,
  onClick,
  ...props
}: {
  checked: boolean;
  label: string;
  onClick: () => void;
  className?: string;
}) => (
  <CheckBoxWrapper>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox onClick={onClick} checked={checked}>
        <Icon>
          <Image src="/images/post/checktick.svg" layout="fill" alt="tick" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <label>{label}</label>
  </CheckBoxWrapper>
);

export default Checkbox;
