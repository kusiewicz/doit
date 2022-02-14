import S from './button-date-picker.styles';
import 'dayjs/locale/pl';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import locale from 'antd/es/date-picker/locale/pl_PL';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isToday from 'dayjs/plugin/isToday';
import { dateToCustomButton } from '@utils/date-to-custom-button';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.locale('pl');

export const DatePicker = ({ date, onChange }: { date: Dayjs; onChange: Function }) => {
  const [color, setColor] = useState('buttonToday');

  useEffect(() => {
    if (date.isToday()) {
      setColor('buttonToday');
      return;
    }

    if (date.isTomorrow()) {
      setColor('buttonTomorrow');
      return;
    }

    if (date.diff(dayjs(), 'day') <= 6) {
      setColor('buttonWeek');
      return;
    }

    setColor('buttonAnother');
    return;
  }, [date]);

  return (
    <S.DatePickerr
      locale={locale}
      onChange={(v) => onChange(v)}
      defaultValue={dayjs()}
      allowClear={false}
      format={dateToCustomButton}
      className="datepicker"
      color={color}
      suffixIcon={<S.CalendarIcon />}
      showToday={false}
      disabledDate={(v) => v.isBefore(dayjs().subtract(1, 'day'))}
    />
  );
};
