import S from './task.styles';
import dayjs from 'dayjs';

export const Task = () => {
  return (
    <S.Wrapper>
      <S.Checkbox />
      <S.TaskContent>
        <S.Title>Tytuł</S.Title>
        <S.Description>Opis</S.Description>
        <S.SmallDatePicker
          date={dayjs()}
          onChange={() => console.log('eee')}
          icon={<S.CalendarIcon />}
        />
      </S.TaskContent>
    </S.Wrapper>
  );
};
