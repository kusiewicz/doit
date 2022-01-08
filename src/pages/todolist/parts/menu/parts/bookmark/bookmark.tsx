import { ReactNode } from 'react';
import S from './bookmark.styles';

interface BookmarkProps {
  Icon: Function;
  children: ReactNode;
  color?: string;
}

export const Bookmark = ({ Icon, children }: BookmarkProps) => (
  <S.Wrapper>
    <Icon />
    <S.Text>{children}</S.Text>
  </S.Wrapper>
);
