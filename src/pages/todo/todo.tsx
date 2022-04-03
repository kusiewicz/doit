import S from './todo.styles';
import { Main } from './main/main';
import { Nav } from './nav/nav';
import { Outlet } from 'react-router-dom';

export const Todo = () => {
  return (
    <S.Wrapper>
      <Nav />
      <Main>
        <Outlet />
      </Main>
    </S.Wrapper>
  );
};
