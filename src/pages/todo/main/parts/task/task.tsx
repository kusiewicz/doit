import S from './task.styles';
import dayjs, { Dayjs } from 'dayjs';
import { editTask, TaskData, deleteTask } from '@pages/todo/main/api/tasks.actions';
import { useUserInfo } from '@lib/firebase/use-user-info';

export const Task = ({
  data,
  onClick,
  refetch,
}: {
  data: TaskData;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  refetch: Function;
}) => {
  const { id: taskId, title, description, date, priority } = data;
  const { user } = useUserInfo();

  return (
    <S.Wrapper>
      <S.Delete
        onClick={() => {
          deleteTask(taskId, user.id);
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
            editTask(taskId, { date: v.toISOString() }, user.id);
            refetch();
          }}
          icon={<S.CalendarIcon />}
        />
      </S.Task>
    </S.Wrapper>
  );
};
