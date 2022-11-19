import styled from 'styled-components';
import { InputElementProps } from './interface';
import { Label, Radio } from './radioButton.styled';
// import { DisabledIcon } from "src/styled-components/Icons";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RadioButton = ({ label, id, disabled, ...rest }: InputElementProps) => {
  return (
    <Wrapper>
      <Radio id={id} type="radio" disabled={disabled} {...rest} />
      <Label htmlFor={id} disabled={disabled}>
        <span>{label}</span>
      </Label>
    </Wrapper>
  );
};

export default RadioButton;
