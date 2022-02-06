import S from './date-picker.styles';
import 'dayjs/locale/pl';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import locale from 'antd/es/date-picker/locale/pl_PL';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.locale('pl');

export const DatePicker = () => {
  const [date, setDate] = useState(dayjs());
  const [color, setColor] = useState('buttonToday');

  const dateFormatter = (value: Dayjs) => {
    if (date.isToday()) {
      setColor('buttonToday');
      return 'Dziś';
    }

    if (date.isTomorrow()) {
      setColor('buttonTomorrow');
      return 'Jutro';
    }

    if (date.diff(dayjs(), 'day') <= 6) {
      setColor('buttonWeek');
      return value.format('dddd');
    }

    setColor('buttonAnother');
    return value.format('D MMM');
  };

  return (
    <S.DatePickerr
      locale={locale}
      value={date}
      onChange={(pickedDate) => setDate(dayjs(pickedDate))}
      allowClear={false}
      format={dateFormatter}
      className="datepicker"
      color={color}
      suffixIcon={<S.CalendarIcon />}
      showToday={false}
      disabledDate={(d) => d.isBefore(dayjs().subtract(1, 'day'))}
    />
  );
};
