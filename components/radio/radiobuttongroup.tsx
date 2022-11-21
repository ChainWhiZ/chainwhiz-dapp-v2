import { IInputGroup, IOption } from 'components/radio/interface';
import styled from 'styled-components';
import RadioButton from './radiobutton';

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`;

const RadioButtonGroup = ({ options, onChange, value }: IInputGroup) => {
  function renderOptions() {
    return options.map(({ label, name, disabled }: IOption, index: number) => {
      const shortenedOptionLabel = label.replace(/\s+/g, '');
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <RadioButton
          value={label}
          label={label}
          key={optionId}
          id={optionId}
          name={name}
          disabled={disabled}
          defaultChecked={index === 0}
          onChange={onChange}
          checked={label == value}
        />
      );
    });
  }
  return (
    <Fieldset>
      <Wrapper>{renderOptions()}</Wrapper>
    </Fieldset>
  );
};
export default RadioButtonGroup;
