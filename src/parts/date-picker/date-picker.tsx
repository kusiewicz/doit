import S from './date-picker.styles';
import 'dayjs/locale/pl';
import dayjs, { Dayjs } from 'dayjs';
import { ReactNode, useEffect, useState } from 'react';
import locale from 'antd/es/date-picker/locale/pl_PL';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isToday from 'dayjs/plugin/isToday';
import { dateToDescriptiveDate } from '@utils/date-to-descriptive-date';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.locale('pl');

export const DatePicker = ({
  date: incomingDate,
  onChange,
  icon,
  className,
}: {
  date: Dayjs;
  onChange: Function;
  icon?: ReactNode;
  className?: string;
}) => {
  const [color, setColor] = useState('buttonToday');
  const [date, setDate] = useState(incomingDate);

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
    <S.DatePicker
      locale={locale}
      onChange={(v) => {
        onChange(v);
        if (v) {
          setDate(v);
        }
      }}
      defaultValue={dayjs(date)}
      allowClear={false}
      format={dateToDescriptiveDate}
      color={color}
      suffixIcon={icon}
      className={className}
      showToday={false}
      disabledDate={(v) => v.isBefore(dayjs().subtract(1, 'day'))}
    />
  );
};
