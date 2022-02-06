import dayjs from 'dayjs';
import 'dayjs/locale/pl';
dayjs.locale('pl');

import { Mode } from '@pages/todolist/parts/content/content';

export const getFormattedDate = (mode: string) => {
  if (mode === Mode.TODAY) {
    return dayjs().format('ddd D MMM');
  }

  return dayjs().add(1, 'day').format('ddd D MMM');
};
