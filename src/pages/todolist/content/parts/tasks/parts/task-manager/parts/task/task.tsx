import S from './task.styles';
import dayjs from 'dayjs';

export const Task = ({ title, description }: { title: string; description: string }) => {
  return (
    <S.Wrapper>
      <S.Checkbox />

      <S.Task>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.SmallDatePicker
          date={dayjs()}
          onChange={() => console.log('eee')}
          icon={<S.CalendarIcon />}
        />
      </S.Task>
    </S.Wrapper>
  );
};
