import { TaskBoard } from './parts/task-board/task-board';
import { Task } from './parts/task/task';
import S from './task-manager.styles';

export const TaskManager = ({
  isAddMode,
  setAddMode,
}: {
  isAddMode: boolean;
  setAddMode: Function;
}) => {
  return (
    <>
      {isAddMode ? (
        <TaskBoard onClose={() => setAddMode(false)} />
      ) : (
        <>
          <Task />
          <S.Add onClick={() => setAddMode(true)}>
            <S.PlusHover>
              <S.Plus />
            </S.PlusHover>
            Dodaj zadanie
          </S.Add>
          {/* <EmptyState isToday={mode === Mode.TODAY} setAddingMode={setAddingMode} /> */}
        </>
      )}
    </>
  );
};
