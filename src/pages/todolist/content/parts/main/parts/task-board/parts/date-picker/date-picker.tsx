import { Dayjs } from 'dayjs';
import S from './date-picker.styles';

export const DatePicker = ({ date, onChange }: { date: Dayjs; onChange: Function }) => {
  return <S.DatePicker date={date} onChange={onChange} icon={<S.CalendarIcon />} />;
};
