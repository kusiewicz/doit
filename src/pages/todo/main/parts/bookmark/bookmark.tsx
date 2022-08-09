import { ReactNode } from 'react';
import S from './bookmark.styles';

interface BookmarkProps {
  Icon: Function;
  children: ReactNode;
  onClick: () => void;
  highlighted?: boolean;
}

export const Bookmark = ({ Icon, children, onClick, highlighted }: BookmarkProps) => {
  return (
    <S.Wrapper onClick={onClick} highlighted={highlighted}>
      <Icon />
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
};
