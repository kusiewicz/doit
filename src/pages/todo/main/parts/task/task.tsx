import S from './task.styles';
import dayjs, { Dayjs } from 'dayjs';
import { editTask, TaskData, deleteTask } from '@pages/todo/main/api/tasks.actions';

export const Task = ({
  data,
  onClick,
  refetch,
}: {
  data: TaskData;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  refetch: Function;
}) => {
  const { id, title, description, date, priority } = data;

  return (
    <S.Wrapper>
      <S.Delete
        onClick={() => {
          deleteTask(id);
          refetch();
        }}
        priority={priority}
      />
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
