import S from './task.styles';
import dayjs, { Dayjs } from 'dayjs';
import { editTask, TaskData } from '../../../../api/get-set-tasks';

export const Task = ({ data }: { data: TaskData }) => {
  return (
    <S.Wrapper>
      <S.Checkbox />

      <S.Task>
        <S.Title>{data.title}</S.Title>
        <S.Description>{data.description}</S.Description>
        <S.SmallDatePicker
          date={dayjs(data.date)}
          onChange={(v: Dayjs) => {
            editTask(data.id, { date: v.toISOString() });
          }}
          icon={<S.CalendarIcon />}
        />
      </S.Task>
    </S.Wrapper>
  );
};
