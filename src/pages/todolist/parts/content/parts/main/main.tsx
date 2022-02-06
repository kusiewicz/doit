import { getFormattedDate } from '@utils/getFormattedDate';
import { useState } from 'react';
import S from './main.styles';
import { EmptyState } from './parts/empty-state/empty-state';
import { TaskBoard } from './parts/task-board/task-board';
import { Mode } from '../../content';

export const Main = ({ mode }: { mode: string }) => {
  const [addingMode, setAddingMode] = useState(false);

  return (
    <S.Wrapper>
      <S.Day>{mode === Mode.TODAY ? 'Dziś' : 'Jutro'}</S.Day>
      <S.Date>{getFormattedDate(mode)}</S.Date>
      {addingMode ? (
        <TaskBoard />
      ) : (
        <>
          <S.Add onClick={() => setAddingMode(true)}>
            <div>
              <S.Plus />
            </div>
            Dodaj zadanie
          </S.Add>
          <EmptyState isToday={mode === Mode.TODAY} setAddingMode={setAddingMode} />
        </>
      )}
    </S.Wrapper>
  );
};
