import S from './main.styles';
import { Bookmark } from './parts/bookmark/bookmark';
import { IncomingIcon } from './parts/icons/incoming-icon/incoming-icon';
import { TodayIcon } from './parts/icons/today-icon/today-icon';
import { TommorowIcon } from './parts/icons/tommorow-icon/tommorow-icon';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactNode } from 'react';
import { dateToWeekdayDayMonth } from '@utils/date-to-weekday-day-month';

export enum Mode {
  TODAY = 'today',
  TOMORROW = 'tomorrow',
  WEEK = 'upcoming',
}

export const Main = ({
  children,
  menuVisibility,
}: {
  children: ReactNode;
  menuVisibility: boolean;
}) => {
  const navigate = useNavigate();

  const { tab } = useParams<{ tab: Mode }>();
  const isToday = tab === 'today';

  const day = isToday ? 'Today' : 'Tomorrow';

  const getDescription = () => {
    if (tab === Mode.TODAY) {
      return 'Today';
    }
    if (tab === Mode.TOMORROW) {
      return 'Tomorrow';
    }
    if (tab === Mode.WEEK) {
      return 'Upcoming';
    }
  };

  return (
    <>
      <S.Menu shouldHide={!menuVisibility}>
        <Bookmark
          Icon={TodayIcon}
          onClick={() => navigate('/app/today')}
          highlighted={tab === Mode.TODAY}
        >
          Today
        </Bookmark>

        <Bookmark
          Icon={TommorowIcon}
          onClick={() => navigate('/app/tomorrow')}
          highlighted={tab === Mode.TOMORROW}
        >
          Tomorrow
        </Bookmark>

        <Bookmark
          Icon={IncomingIcon}
          onClick={() => navigate('/app/upcoming')}
          highlighted={tab === Mode.WEEK}
        >
          Upcoming week
        </Bookmark>
      </S.Menu>
      <S.Content shouldHide={!menuVisibility}>
        <S.Day>{getDescription()}</S.Day>
        {tab && tab !== Mode.WEEK && <S.Date>{dateToWeekdayDayMonth(day)}</S.Date>}
        {children}
      </S.Content>
    </>
  );
};
