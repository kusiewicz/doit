import { ReactNode } from 'react';
import S from './bookmark.styles';

interface BookmarkProps {
  Icon: Function;
  children: ReactNode;
  onClick: () => void;
  active: boolean;
}

export const Bookmark = ({ Icon, children, onClick, active }: BookmarkProps) => (
  <S.Wrapper onClick={onClick} active={active}>
    <Icon />
    <S.Text>{children}</S.Text>
  </S.Wrapper>
);
