import S from './checkbox.styles';

export const Checkbox = ({ className, onClick }: { className?: string; onClick: () => void }) => (
  <S.Wrapper className={className} onClick={onClick}>
    <S.Check />
  </S.Wrapper>
);
