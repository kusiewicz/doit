import S from './content.styles';
import { EmptyState } from './parts/empty-state/empty-state';
import { getDate } from '@utils/getDate';
import { TaskTextBox } from './parts/task-textbox/task-textbox';

export const Content = ({ day }: { day: string }) => {
  return (
    <S.Wrapper>
      <S.Day>Dziś</S.Day>
      <S.Date>{getDate()}</S.Date>
      <S.AddTask>
        <div>
          <S.Plus />
        </div>
        Dodaj zadanie
      </S.AddTask>
      <TaskTextBox />
      <EmptyState day={day} />
    </S.Wrapper>
  );
};
