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

export const Main = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const { tab } = useParams<{ tab: Mode }>();
  const isToday = tab === 'today';

  const day = isToday ? 'Dziś' : 'Jutro';

  const getDescription = () => {
    // switch (tab) {
    //   case Mode.TODAY:
    //     return 'Dziś';
    //   case Mode.TOMORROW:
    //     return 'Jutro';
    //   case Mode.WEEK:
    //     return 'Nadchodzące';
    // }
    if (tab === Mode.TODAY) {
      return 'Dziś';
    }
    if (tab === Mode.TOMORROW) {
      return 'Jutro';
    }
    if (tab === Mode.WEEK) {
      return 'Nadchodzące';
    }
  };

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

      <S.Content>
        <S.Day>{getDescription()}</S.Day>
        {tab && <S.Date>{dateToWeekdayDayMonth(day)}</S.Date>}
        {children}
      </S.Content>
    </>
  );
};
