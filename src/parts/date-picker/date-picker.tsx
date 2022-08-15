import S from './date-picker.styles';
import 'dayjs/locale/en';
import dayjs, { Dayjs } from 'dayjs';
import { ReactNode, useState } from 'react';
import locale from 'antd/es/date-picker/locale/en_GB';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isToday from 'dayjs/plugin/isToday';
import { dateToDescriptiveDate } from '@utils/date-to-descriptive-date';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.locale('en');

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
  const [date, setDate] = useState(incomingDate);

  return (
    <S.Wrapper onClick={(e) => e.stopPropagation()}>
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
        color={(() => {
          if (date.isToday()) {
            return 'buttonToday';
          }
          if (date.isTomorrow()) {
            return 'buttonTomorrow';
          }
          if (date.diff(dayjs(), 'day') <= 6) {
            return 'buttonWeek';
          }
          return 'buttonAnother';
        })()}
        suffixIcon={icon}
        className={className}
        showToday={false}
        disabledDate={(v) => v.isBefore(dayjs().subtract(1, 'day'))}
      />
    </S.Wrapper>
  );
};
