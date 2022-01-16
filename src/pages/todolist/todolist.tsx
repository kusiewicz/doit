import { useState } from 'react';

import S from './todolist.styles';

import { Menu } from './parts/menu/menu';
import { Nav } from './parts/nav/nav';
import { Content } from './parts/content/content';

export const Todolist = () => {
  const [when, setWhen] = useState('today');

  console.log(when);

  return (
    <S.Wrapper>
      <Nav />
      <Menu setWhen={setWhen} when={when} />
      <Content />
    </S.Wrapper>
  );
};
