import S from './menu.styles';
import { Bookmark } from './parts/bookmark/bookmark';
import { IncomingIcon } from './parts/icons/incoming-icon/incoming-icon';
import { TodayIcon } from './parts/icons/today-icon/today-icon';
import { TommorowIcon } from './parts/icons/tommorow-icon/tommorow-icon';

export const Menu = ({ setDay, day }: { setDay: Function; day: string }) => {
  return (
    <S.Wrapper>
      <Bookmark Icon={TodayIcon} onClick={() => setDay('today')} active={day === 'today'}>
        Dziś
      </Bookmark>
      <Bookmark Icon={TommorowIcon} onClick={() => setDay('tommorow')} active={day === 'tommorow'}>
        Jutro
      </Bookmark>
      <Bookmark Icon={IncomingIcon} onClick={() => setDay('7days')} active={day === '7days'}>
        Nadchodzące 7 dni
      </Bookmark>
    </S.Wrapper>
  );
};
