import S from './task-board.styles';
import { EmptyState } from './parts/empty-state/empty-state';
import { getDate } from '@utils/getDate';
import { TaskCreator } from './parts/task-creator/task-creator';

export const TaskBoard = ({ isToday }: { isToday?: boolean }) => {
  return (
    <S.Wrapper>
      <S.Day>{isToday ? 'Dziś' : 'Jutro'}</S.Day>
      <S.Date>{getDate()}</S.Date>

      <S.AddTask>
        <div>
          <S.Plus />
        </div>
        Dodaj zadanie
      </S.AddTask>

      <TaskCreator />

      <EmptyState isToday={isToday} />
    </S.Wrapper>
  );
};
