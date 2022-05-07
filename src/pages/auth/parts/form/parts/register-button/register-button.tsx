import { ElementType } from 'react';
import S from './register-button.styles';

export const RegisterButton = ({ Icon, title }: { Icon: ElementType; title: string }) => (
  <S.Wrapper>
    <Icon />
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);
