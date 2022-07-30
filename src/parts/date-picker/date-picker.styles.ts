import styled, { css } from 'styled-components';
import { GeneratePicker as DatePickerBase } from '@utils/generate-picker';

const DatePicker = styled(DatePickerBase)<{ color: string }>`
  border-radius: 5px;
  padding: 1px 0;
  width: fit-content;
  position: relative;
  cursor: pointer;
  background-color: transparent;

  &:focus,
  &:hover,
  &:active {
    background: #fdddc3;
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
    border: 1px solid ${({ theme }) => theme.colors.pickerBorder};
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
