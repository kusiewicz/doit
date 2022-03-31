import S from './checkbox.styles';

export const Checkbox = ({ className }: { className?: string }) => (
  <S.Wrapper className={className}>
    <S.Check />
  </S.Wrapper>
);
