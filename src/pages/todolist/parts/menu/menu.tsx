import S from './menu.styles';
import { Bookmark } from './parts/bookmark/bookmark';
import { IncomingIcon } from './parts/icons/incoming-icon/incoming-icon';
import { TodayIcon } from './parts/icons/today-icon/today-icon';
import { TommorowIcon } from './parts/icons/tommorow-icon/tommorow-icon';

export const Menu = ({ setWhen, when }: { setWhen: Function; when: string }) => {
  return (
    <S.Wrapper>
      <Bookmark Icon={TodayIcon} onClick={() => setWhen('today')} active={when === 'today'}>
        Dziś
      </Bookmark>
      <Bookmark
        Icon={TommorowIcon}
        onClick={() => setWhen('tommorow')}
        active={when === 'tommorow'}
      >
        Jutro
      </Bookmark>
      <Bookmark Icon={IncomingIcon} onClick={() => setWhen('7days')} active={when === '7days'}>
        Nadchodzące 7 dni
      </Bookmark>
    </S.Wrapper>
  );
};
