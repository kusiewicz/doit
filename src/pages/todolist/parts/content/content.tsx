import { useState } from 'react';
import S from './content.styles';
import { Bookmark } from './parts/bookmark/bookmark';
import { IncomingIcon } from './parts/icons/incoming-icon/incoming-icon';
import { TodayIcon } from './parts/icons/today-icon/today-icon';
import { TommorowIcon } from './parts/icons/tommorow-icon/tommorow-icon';
import { TaskBoard } from './parts/task-board/task-board';

export const Content = () => {
  const [mode, setMode] = useState('Today');

  return (
    <>
      <S.MenuWrapper>
        <Bookmark Icon={TodayIcon} onClick={() => setMode('Today')}>
          Dziś
        </Bookmark>

        <Bookmark Icon={TommorowIcon} onClick={() => setMode('Tomorrow')}>
          Jutro
        </Bookmark>

        <Bookmark Icon={IncomingIcon} onClick={() => setMode('Week')}>
          Nadchodzące 7 dni
        </Bookmark>
      </S.MenuWrapper>
      <TaskBoard isToday={mode === 'Today'} />
    </>
  );
};
