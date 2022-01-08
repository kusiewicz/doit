import S from './menu.styles';
import { Bookmark } from './parts/bookmark/bookmark';
import { IncomingIcon } from './parts/icons/incoming-icon/incoming-icon';
import { TodayIcon } from './parts/icons/today-icon/today-icon';
import { TommorowIcon } from './parts/icons/tommorow-icon/tommorow-icon';

export const Menu = () => (
  <S.Wrapper>
    <Bookmark Icon={TodayIcon}>Dziś</Bookmark>
    <Bookmark Icon={TommorowIcon}>Jutro</Bookmark>
    <Bookmark Icon={IncomingIcon}>Nadchodzące 7 dni</Bookmark>
  </S.Wrapper>
);
