import dayjs from 'dayjs';
import 'dayjs/locale/pl';
dayjs.locale('pl');

export const dateToWeekdayDayMonth = (mode: string) => {
  if (mode === 'Today') {
    return dayjs().format('ddd D MMM');
  }

  return dayjs().add(1, 'day').format('ddd D MMM');
};
