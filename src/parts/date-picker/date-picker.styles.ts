import styled, { css } from 'styled-components';
import { GeneratePicker as DatePickerBase } from '@utils/generate-picker';

const DatePicker = styled(DatePickerBase)<{ color: string }>`
  border-radius: 5px;
  padding: 1px 0;
  border: 1px solid ${({ theme }) => theme.baseColors.grey};
  width: fit-content;
  position: relative;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.baseColors.grey};
    background: ${({ theme }) => theme.colors.hoveredPicker};
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
