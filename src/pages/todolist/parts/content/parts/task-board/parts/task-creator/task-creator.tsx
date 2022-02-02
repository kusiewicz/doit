import S from './task-creator.styles';
import { DatePicker } from './parts/date-picker/date-picker';

export const TaskCreator = () => (
  <S.Wrapper>
    <S.TitleInput placeholder="np. Zorganizuj spotkanie na 11" />
    <S.DescriptionInput placeholder="Opis" />
    <DatePicker />
  </S.Wrapper>
);
