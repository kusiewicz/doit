import styled from 'styled-components';
import { DatePicker as DatePickerBase } from '@parts/date-picker/date-picker';
import { ReactComponent as CalendarIconBase } from '@assets/icons/calendar-button.svg';

const CalendarIcon = styled(CalendarIconBase)`
  vertical-align: text-bottom;
  margin-right: ${({ theme }) => theme.spacing.xsmall};
  margin-left: ${({ theme }) => theme.spacing.xxsmall};
`;

const DatePicker = styled(DatePickerBase)``;

export default { DatePicker, CalendarIcon };
