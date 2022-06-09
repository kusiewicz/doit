import S from './submit-button.styles';

export const Submit = ({ title, onClick }: { title: string; onClick: () => void }) => (
  <S.Wrapper onClick={onClick}>{title}</S.Wrapper>
);
