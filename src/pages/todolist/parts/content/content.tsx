import S from './content.styles';
import { EmptyState } from './parts/empty-state/empty-state';

export const Content = ({ day }: { day: string }) => {
  return (
    <S.Wrapper>
      <S.Day>Dziś</S.Day>
      <S.Date>Pon 10 Sty</S.Date>
      <S.AddTask>
        <div>
          <S.Plus />
        </div>
        Dodaj zadanie
      </S.AddTask>
      <EmptyState day={day} />
    </S.Wrapper>
  );
};
