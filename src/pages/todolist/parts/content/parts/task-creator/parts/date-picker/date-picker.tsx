import S from './date-picker.styles';
import locale from 'antd/es/date-picker/locale/pl_PL';
import 'dayjs/locale/pl';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

import isTomorrow from 'dayjs/plugin/isTomorrow';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.locale('pl');

export const DatePicker = () => {
  const [date, setDate] = useState(dayjs());

  const customFormat = (value: Dayjs) => {
    if (date.isToday()) {
      return 'Dziś';
    }

    if (date.isTomorrow()) {
      return 'Jutro';
    }

    if (date.diff(dayjs(), 'day') <= 6) {
      return value.format('dddd');
    }

    return value.format('D MMM');
  };

  return (
    <S.DatePickerr
      locale={locale}
      value={date}
      onChange={(pickedDate) => setDate(dayjs(pickedDate))}
      allowClear={false}
      format={customFormat}
      className="datepicker"
      color="buttonWeek"
      suffixIcon={<S.CalendarIcon />}
    />
  );
};
