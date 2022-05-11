import { ElementType } from 'react';
import S from './social-button.styles';

export const SocialButton = ({ Icon, title }: { Icon: ElementType; title: string }) => (
  <S.Wrapper>
    <Icon />
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);
