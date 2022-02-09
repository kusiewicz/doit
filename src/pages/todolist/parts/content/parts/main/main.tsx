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
        <TaskBoard onClose={() => setAddingMode(false)} />
      ) : (
        <>
          <S.Add onClick={() => setAddingMode(true)}>
            <S.PlusHover>
              <S.Plus />
            </S.PlusHover>
            Dodaj zadanie
          </S.Add>
          <EmptyState isToday={mode === Mode.TODAY} setAddingMode={setAddingMode} />
        </>
      )}
    </S.Wrapper>
  );
};
