import { getTasks } from '@pages/todo/main/api/tasks.actions';
import { useQuery } from 'react-query';
import { EmptyState } from './empty-state/empty-state';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Task } from '../task/task';
import { Add } from '../add-button/add-button';
import { Mode } from '../../main';
import dayjs, { Dayjs } from 'dayjs';
import { useUserInfo } from '@lib/firebase/use-user-info';
import S from './tasks.styles';

export const Tasks = () => {
  const navigate = useNavigate();
  const { user } = useUserInfo();

  const { tab } = useParams<{ tab: Mode }>();

  const checkMode = (date: string | Dayjs) => {
    const modes = {
      [Mode.TODAY]: dayjs(date).isToday(),
      [Mode.TOMORROW]: dayjs(date).isTomorrow(),
      [Mode.WEEK]: dayjs(date).diff(dayjs(), 'day') <= 6,
    };

    if (tab) {
      return modes[tab];
    }
  };

  const { data, refetch } = useQuery(['tasks', user.id], () => getTasks(user.id), {
    cacheTime: 0,
    enabled: !!user.id,
  });

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [data, refetch]);

  return (
    <>
      {data?.[0] ? (
        <S.Wrapper>
          {data.map(
            (task) =>
              checkMode(task.date) && (
                <Task
                  onClick={() => navigate(`/app/task/${task.id}`)}
                  data={task}
                  key={task.id}
                  refetch={refetch}
                />
              ),
          )}
          <Add />
        </S.Wrapper>
      ) : (
        <EmptyState tab={tab} />
      )}
    </>
  );
};
