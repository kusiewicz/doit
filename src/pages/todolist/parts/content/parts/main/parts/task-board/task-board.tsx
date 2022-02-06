import { DatePicker } from './parts/date-picker/date-picker';
import S from './task-board.styles';

export const TaskBoard = () => {
  return (
    <S.Wrapper>
      <S.TitleInput placeholder="np. Zorganizuj spotkanie na 11" />
      <S.DescriptionInput placeholder="Opis" />
      <DatePicker />
    </S.Wrapper>
  );
};
