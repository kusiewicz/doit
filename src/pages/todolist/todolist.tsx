import S from './todolist.styles';

import { Content } from './content/content';
import { Nav } from './nav/nav';

export const Todolist = () => {
  return (
    <S.Wrapper>
      <Nav />
      <Content />
    </S.Wrapper>
  );
};
