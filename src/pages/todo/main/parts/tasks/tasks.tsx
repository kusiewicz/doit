import { getTasks } from '@pages/todo/main/api/get-set-tasks';
import { useQuery } from 'react-query';
import { EmptyState } from './empty-state/empty-state';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Task } from '../task/task';
import { Add } from '../add-button/add-button';

export const Tasks = () => {
  const navigate = useNavigate();
  const { data, refetch } = useQuery('tasks', getTasks, { cacheTime: 0 });

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [data, refetch]);

  return (
    <>
      {data?.[0] ? (
        <>
          {data.map((task) => (
            <Task onClick={() => navigate(`/app/task/${task.id}`)} data={task} key={task.id} />
          ))}
          <Add />
        </>
      ) : (
        <EmptyState />
      )}
    </>
  );
};
