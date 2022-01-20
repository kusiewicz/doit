import moment from 'moment';
import { useState } from 'react';
import S from './date-picker.styles';

export const DatePicker = () => {
  const [date, setDate] = useState(moment());

  const customFormat = () => {
    const today = moment().endOf('day');
    const tomorrow = moment().add(1, 'day').endOf('day');

    if (date < today) return 'Dziś';
    if (date < tomorrow) return 'Jutro';

    return 'DD/MM/YY';
  };

  return (
    <>
      <S.DatePicker
        color="dateBtnToday"
        value={date}
        onChange={(v) => v && setDate(v)}
        format={customFormat}
      />
    </>
  );
};
