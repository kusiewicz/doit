import { TaskData } from '../../api/get-set-tasks';
import { Editor } from './parts/editor/editor';
import { Task } from './parts/task/task';
import S from './task-manager.styles';

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
        <Editor onClose={() => setAddMode(false)} />
      ) : (
        <>
          {tasks && tasks.map((data) => <Task data={data} />)}

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
