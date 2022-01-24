import styled, { css } from 'styled-components';
import { DatePicker as DatePickerBase } from '../../../../../../../../parts/date-picker/date-picker';
import { ReactComponent as CalendarIconBase } from '@assets/icons/calendar-button.svg';

const Label = styled.label<{ color: string }>`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  pointer-events: none;

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colors[color]};
    `};
`;

const CalendarIcon = styled(CalendarIconBase)`
  vertical-align: text-bottom;
  margin-right: ${({ theme }) => theme.spacing.xxsmall};
  pointer-events: none;
`;

const DatePickerr = styled(DatePickerBase)<{ color: string }>`
  border-radius: 5px;
  padding: 0 ${({ theme }) => theme.spacing.xsmall};
  padding: 0;
  border: 1px solid ${({ theme }) => theme.baseColors.darkGrey};
  width: fit-content;
  position: relative;

  .ant-picker-input {
    flex-direction: row-reverse;
  }

  input {
    ${({ color }) =>
      color &&
      css`
        color: ${({ theme }) => theme.colors[color]};
      `};
  }
`;

export default { DatePickerr, Label, CalendarIcon };
