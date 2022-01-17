import { useState } from 'react';

import S from './todolist.styles';

import { Menu } from './parts/menu/menu';
import { Nav } from './parts/nav/nav';
import { Content } from './parts/content/content';

export const Todolist = () => {
  const [day, setDay] = useState('today');

  return (
    <S.Wrapper>
      <Nav />
      <Menu setDay={setDay} day={day} />
      <Content day={day} />
    </S.Wrapper>
  );
};
