import { ReactNode } from 'react';
import S from './link.styles';

export const Link = ({
  color = 'Grey',
  children,
}: {
  color: 'Grey' | 'Red';
  children: ReactNode;
}) => <S.Wrapper color={color}>{children}</S.Wrapper>;
