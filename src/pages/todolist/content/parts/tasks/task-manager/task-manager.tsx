import { TaskData } from '@pages/todolist/content/api/get-set-tasks';
import { Editor } from './editor/editor';
import { Task } from './task/task';
import S from './task-manager.styles';
import { useNavigate } from 'react-router-dom';
import { Mode } from '../tasks';

export const TaskManager = ({
  mode,
  setMode,
  tasks,
}: {
  mode: Mode;
  setMode: Function;
  tasks?: TaskData[];
}) => {
  const navigate = useNavigate();

  return (
    <>
      {mode === Mode.ADD || mode === Mode.EDIT ? (
        <Editor
          onClose={() => {
            setMode(Mode.NORMAL);
            navigate('/app');
          }}
        />
      ) : (
        <>
          {tasks?.map((data) => (
            <Task
              onClick={() => {
                setMode(Mode.EDIT);
                navigate(`task/${data.id}`);
              }}
              data={data}
              key={data.id}
            />
          ))}

          <S.Add onClick={() => setMode(Mode.ADD)}>
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
