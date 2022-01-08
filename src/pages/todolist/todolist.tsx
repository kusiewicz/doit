import S from './todolist.styles';

import { Menu } from './parts/menu/menu';
import { Nav } from './parts/nav/nav';

export const Todolist = () => (
  <S.Wrapper>
    <Nav />
    <Menu />
  </S.Wrapper>
);
