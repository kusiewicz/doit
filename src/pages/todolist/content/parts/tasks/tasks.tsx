import { dateToWeekdayDayMonth } from '@utils/date-to-weekday-day-month';
import { useState } from 'react';
import S from './tasks.styles';
// import { EmptyState } from './parts/empty-state/empty-state';
import { Mode } from '../../content';
import { TaskManager } from './parts/task-manager/task-manager';

export const Tasks = ({ mode }: { mode: string }) => {
  const [isAddMode, setAddMode] = useState(false);

  return (
    <S.Wrapper>
      <S.Day>{mode === Mode.TODAY ? 'Dziś' : 'Jutro'}</S.Day>
      <S.Date>{dateToWeekdayDayMonth(mode)}</S.Date>
      <TaskManager isAddMode={isAddMode} setAddMode={setAddMode} />
    </S.Wrapper>
  );
};
