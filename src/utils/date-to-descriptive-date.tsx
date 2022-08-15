import dayjs, { Dayjs } from 'dayjs';

export const dateToDescriptiveDate = (value: Dayjs) => {
  if (value.isToday()) {
    return 'Today';
  }

  if (value.isTomorrow()) {
    return 'Tomorrow';
  }

  if (value.diff(dayjs(), 'day') <= 6) {
    return value.format('dddd');
  }

  return value.format('D MMM');
};
