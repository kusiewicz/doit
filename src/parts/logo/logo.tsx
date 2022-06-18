import { useNavigate } from 'react-router-dom';
import S from './logo.styles';

export const Logo = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper className={className} onClick={() => navigate('/home')}>
      <S.AppIcon />
      <S.Title>doit.</S.Title>
    </S.Wrapper>
  );
};
