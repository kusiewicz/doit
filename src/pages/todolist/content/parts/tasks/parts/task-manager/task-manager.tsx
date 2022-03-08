import { TaskData } from '../../api/get-set-tasks';
import { TaskBoard } from './parts/task-board/task-board';
import { Task } from './parts/task/task';
import S from './task-manager.styles';
import { v4 as uuidv4 } from 'uuid';

export const TaskManager = ({
  isAddMode,
  setAddMode,
  tasks,
}: {
  isAddMode: boolean;
  setAddMode: Function;
  tasks?: TaskData[];
}) => {
  return (
    <>
      {isAddMode ? (
        <TaskBoard onClose={() => setAddMode(false)} />
      ) : (
        <>
          {tasks &&
            tasks.map((v) => <Task title={v.title} description={v.description} key={uuidv4()} />)}

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
