import styled, { css } from 'styled-components';
import { GeneratePicker as DatePickerBase } from '@utils/generate-picker';

const DatePicker = styled(DatePickerBase)<{ color: string }>`
  border-radius: 5px;
  padding: 1px 0;
  width: fit-content;
  position: relative;
  cursor: pointer;
  background-color: #fff3e9;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.hoveredPicker};
    border: 1px solid ${({ theme }) => theme.colors.pickerBorder};
  }

  .ant-picker-input {
    input {
      cursor: pointer;
    }
  }

  .ant-picker-input {
    flex-direction: row-reverse;
  }

  &.ant-picker-focused {
    box-shadow: none;
  }

  input {
    text-transform: capitalize;
  }

  .ant-picker-suffix,
  input {
    ${({ color }) =>
      color &&
      css`
        color: ${({ theme }) => theme.colors[color]};
      `};
  }
`;

const Wrapper = styled.div``;

export default { DatePicker, Wrapper };
