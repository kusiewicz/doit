import { dateToWeekdayDayMonth } from '@utils/date-to-weekday-day-month';
import S from './tasks.styles';
import { TaskManager } from './task-manager/task-manager';
import { getTasks } from '@pages/todolist/content/api/get-set-tasks';
import { useQuery } from 'react-query';
import { EmptyState } from './empty-state/empty-state';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export enum Mode {
  NORMAL = 'normal',
  EDIT = 'edit',
  ADD = 'add',
}

export const Tasks = () => {
  const [mode, setMode] = useState(Mode.NORMAL);

  const { data, refetch } = useQuery('tasks', getTasks);
  const { tab } = useParams();

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [tab]);

  const isToday = tab === 'today';

  const day = isToday ? 'Dziś' : 'Jutro';

  return (
    <S.Wrapper>
      <S.Day>{day}</S.Day>
      <S.Date>{dateToWeekdayDayMonth(day)}</S.Date>

      {data?.[0] ? (
        <TaskManager mode={mode} setMode={setMode} tasks={data} />
      ) : (
        <EmptyState setMode={setMode} isToday={isToday} />
      )}
    </S.Wrapper>
  );
};
