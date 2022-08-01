import S from './error-page.styles';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Text>OOOPS! 404! GUESS YOU BORED...</S.Text>
      <S.SubText>CHECK IF YOU HAVE ANYTHING LEFT TO DO :)</S.SubText>
      <S.Button onClick={() => navigate('/app/home')}>Home</S.Button>
    </S.Wrapper>
  );
};
