import { ReactNode } from 'react';
import S from './submit-button.styles';

export const Submit = ({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) => (
  <S.Wrapper onClick={onClick} className={className}>
    {children}
  </S.Wrapper>
);
