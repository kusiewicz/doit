import S from './task.styles';
import dayjs, { Dayjs } from 'dayjs';
import { editTask, TaskData } from '@pages/todo/main/api/get-set-tasks';

export const Task = ({
  data,
  onClick,
}: {
  data: TaskData;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const { id, title, description, date } = data;

  return (
    <S.Wrapper>
      <S.Checkbox />
      <S.Task onClick={onClick}>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.SmallDatePicker
          date={dayjs(date)}
          onChange={(v: Dayjs) => {
            editTask(id, { date: v.toISOString() });
          }}
          icon={<S.CalendarIcon />}
        />
      </S.Task>
    </S.Wrapper>
  );
};
