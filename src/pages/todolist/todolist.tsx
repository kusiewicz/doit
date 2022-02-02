import S from './todolist.styles';

import { Content } from './parts/content/content';
import { Nav } from './parts/nav/nav';

export const Todolist = () => {
  return (
    <S.Wrapper>
      <Nav />
      <Content />
    </S.Wrapper>
  );
};
