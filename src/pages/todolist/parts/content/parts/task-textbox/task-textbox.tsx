import S from './task-textbox.styles';
import { Button } from './parts/button/button';

export const TaskTextBox = () => (
  <S.Wrapper>
    <S.TitleInput placeholder="np. Zorganizuj spotkanie na 11" />
    <S.DescriptionInput placeholder="Opis" />
    <Button />
  </S.Wrapper>
);
