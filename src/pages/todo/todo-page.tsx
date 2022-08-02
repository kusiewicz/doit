import S from './todo-page.styles';
import { Main } from './main/main';
import { Nav } from './nav/nav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export const TodoPage = () => {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(true);

  return (
    <S.Wrapper>
      <Nav setMenuVisibility={setMenuVisibility} menuVisibility={menuVisibility} />
      <Main menuVisibility={menuVisibility}>
        <Outlet />
      </Main>
    </S.Wrapper>
  );
};
