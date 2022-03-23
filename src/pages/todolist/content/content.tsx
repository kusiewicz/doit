import S from './content.styles';
import { Bookmark } from './parts/bookmark/bookmark';
import { IncomingIcon } from './parts/icons/incoming-icon/incoming-icon';
import { TodayIcon } from './parts/icons/today-icon/today-icon';
import { TommorowIcon } from './parts/icons/tommorow-icon/tommorow-icon';
import { Tasks } from './parts/tasks/tasks';
import { useNavigate } from 'react-router-dom';

export const Content = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Menu>
        <Bookmark Icon={TodayIcon} onClick={() => navigate('/app/today')}>
          Dziś
        </Bookmark>

        <Bookmark Icon={TommorowIcon} onClick={() => navigate('/app/tomorrow')}>
          Jutro
        </Bookmark>

        <Bookmark Icon={IncomingIcon} onClick={() => navigate('/app/upcoming')}>
          Nadchodzące 7 dni
        </Bookmark>
      </S.Menu>

      <Tasks />
    </>
  );
};
