import S from './date-picker.styles';
import locale from 'antd/es/date-picker/locale/pl_PL';
import 'dayjs/locale/pl';
import dayjs from 'dayjs';
import { useState } from 'react';

import isToday from 'dayjs/plugin/isToday';
dayjs.extend(isToday);

import isTomorrow from 'dayjs/plugin/isTomorrow';
dayjs.extend(isTomorrow);

dayjs.locale('pl');

export const DatePicker = () => {
  const [date, setDate] = useState(dayjs());

  const customFormat = () => {
    if (date.isToday()) {
      return 'Dziś';
    }

    if (date.isTomorrow()) {
      return 'Jutro';
    }

    if (date.diff(dayjs(), 'day') <= 6) {
      return date.format('dddd');
    }

    return date.format('D MMM');
  };

  console.log(date);

  return (
    <S.DatePicker
      locale={locale}
      allowClear={false}
      value={date}
      onChange={(newDate) => setDate(dayjs(newDate))}
      format={customFormat}
    />
  );
};
