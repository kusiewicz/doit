import { TaskData } from '../../api/getTasksData';
import { TaskBoard } from './parts/task-board/task-board';
import { Task } from './parts/task/task';
import S from './task-manager.styles';

export const TaskManager = ({
  isAddMode,
  setAddMode,
  tasks,
}: {
  isAddMode: boolean;
  setAddMode: Function;
  tasks: TaskData[];
}) => {
  return (
    <>
      {isAddMode ? (
        <TaskBoard onClose={() => setAddMode(false)} />
      ) : (
        <>
          {tasks && tasks.map((v) => <Task title={v.title} description={v.description} />)}

          <S.Add onClick={() => setAddMode(true)}>
            <S.PlusHover>
              <S.Plus />
            </S.PlusHover>
            Dodaj zadanie
          </S.Add>
        </>
      )}
    </>
  );
};
