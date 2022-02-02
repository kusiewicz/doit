import { ReactNode } from 'react';
import S from './bookmark.styles';

interface BookmarkProps {
  Icon: Function;
  children: ReactNode;
  onClick: () => void;
}

export const Bookmark = ({ Icon, children, onClick }: BookmarkProps) => (
  <S.Wrapper onClick={onClick}>
    <Icon />
    <S.Text>{children}</S.Text>
  </S.Wrapper>
);
