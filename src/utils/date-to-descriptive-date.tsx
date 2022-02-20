import dayjs, { Dayjs } from 'dayjs';

export const dateToDescriptiveDate = (value: Dayjs) => {
  if (value.isToday()) {
    return 'Dziś';
  }

  if (value.isTomorrow()) {
    return 'Jutro';
  }

  if (value.diff(dayjs(), 'day') <= 6) {
    return value.format('dddd');
  }

  return value.format('D MMM');
};
