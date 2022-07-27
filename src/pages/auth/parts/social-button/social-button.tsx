import { ElementType } from 'react';
import S from './social-button.styles';

export const SocialButton = ({
  Icon,
  title,
  onClick,
}: {
  Icon: ElementType;
  title: string;
  onClick: Function;
}) => (
  <S.Wrapper onClick={() => onClick()}>
    <Icon />
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);
