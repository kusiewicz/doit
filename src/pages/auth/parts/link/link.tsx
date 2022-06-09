import { ReactNode } from 'react';
import { Path } from 'react-router-dom';
import S from './link.styles';

export const Link = ({
  color = 'Grey',
  children,
  to,
}: {
  color: 'Grey' | 'Red';
  children: ReactNode;
  to: string | Partial<Path>;
}) => (
  <S.Wrapper to={to} color={color}>
    {children}
  </S.Wrapper>
);
