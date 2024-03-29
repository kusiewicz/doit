import styled from 'styled-components';
import { Checkbox as CheckboxBase } from './checkbox/checkbox';
import { DatePicker as DatePickerBase } from '@parts/date-picker/date-picker';
import { ReactComponent as CalendarIconBase } from '@assets/icons/small-calendar.svg';

const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.taskBorder};
  display: flex;
  cursor: pointer;

  &:last-of-type {
    border: none;
  }
`;

const Task = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.small};
  padding-bottom: 3px;
  width: 100%;
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.colors.description};
`;

const Delete = styled(CheckboxBase)`
  margin-top: 11px;
`;

const SmallDatePicker = styled(DatePickerBase)`
  border: none;
  margin-right: -5px;
  display: block;
  margin-top: -3px;
  border: none !important;

  &:focus,
  &:hover,
  &:active {
    background: #fdddc3;
    border: none;
  }

  .ant-picker-suffix {
    margin-left: 0;
  }

  .ant-picker-input {
    input {
      font-size: ${({ theme }) => theme.fontSize.xxsmall};
    }
  }
`;

const CalendarIcon = styled(CalendarIconBase)`
  margin-right: 2px;
`;

export default {
  Wrapper,
  Title,
  Task,
  Description,
  Delete,
  SmallDatePicker,
  CalendarIcon,
};
