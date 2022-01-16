import S from './content.styles';

export const Content = () => (
  <S.Wrapper>
    <S.Day>Dziś</S.Day>
    <S.Date>Pon 10 Sty</S.Date>
    <S.AddTask>
      <div>
        <S.Plus />
      </div>
      Dodaj zadanie
    </S.AddTask>
  </S.Wrapper>
);
