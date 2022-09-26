import S from './todo-page.styles';
import { Main } from './main/main';
import { Nav } from './nav/nav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useDeviceDetect } from '@utils/hooks/use-device-detect';

export const TodoPage = () => {
  const {
    deviceData: { isMobile },
  } = useDeviceDetect();

  const [menuVisibility, setMenuVisibility] = useState<boolean>(isMobile ? false : true);

  return (
    <S.Wrapper>
      <Nav setMenuVisibility={setMenuVisibility} menuVisibility={menuVisibility} />
      <Main
        setMenuVisibility={setMenuVisibility}
        menuVisibility={menuVisibility}
        isMobile={isMobile}
      >
        <Outlet />
      </Main>
    </S.Wrapper>
  );
};
