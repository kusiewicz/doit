import { dateToWeekdayDayMonth } from '@utils/date-to-weekday-day-month';
import S from './tasks.styles';
// import { EmptyState } from './parts/empty-state/empty-state';
import { Mode } from '../../content';
import { TaskManager } from './parts/task-manager/task-manager';
import { getTasks } from './api/get-set-tasks';
import { useQuery } from 'react-query';
import { EmptyState } from './parts/empty-state/empty-state';
import { useState } from 'react';

export const Tasks = ({ mode }: { mode: string }) => {
  const [isAddMode, setAddMode] = useState(false);
  const { data } = useQuery('tasks', getTasks);

  return (
    <S.Wrapper>
      <S.Day>{mode === Mode.TODAY ? 'Dziś' : 'Jutro'}</S.Day>
      <S.Date>{dateToWeekdayDayMonth(mode)}</S.Date>

      {data ? (
        <TaskManager isAddMode={isAddMode} setAddMode={setAddMode} tasks={data} />
      ) : (
        <EmptyState isToday setAddMode={setAddMode} />
      )}
    </S.Wrapper>
  );
};
