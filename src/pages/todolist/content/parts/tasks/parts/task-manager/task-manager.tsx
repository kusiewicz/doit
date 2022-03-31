import { TaskData } from '../../api/get-set-tasks';
import { Editor } from './parts/editor/editor';
import { Task } from './parts/task/task';
import S from './task-manager.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { Mode } from '../../tasks';

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
  const { id } = useParams();

  return (
    <>
      {mode === Mode.ADD || mode === Mode.EDIT ? (
        <Editor
          onClose={() => {
            setMode(Mode.NORMAL);
            navigate('/app');
          }}
          taskId={id}
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
