import { useDeviceDetect } from '@utils/hooks/use-device-detect';
import { useNavigate } from 'react-router-dom';
import S from './home-page.styles';

export const HomePage = () => {
  const navigate = useNavigate();

  const {
    deviceData: { isDesktop },
  } = useDeviceDetect();

  return (
    <S.Wrapper>
      <S.Nav>
        <S.Logo />
        <S.Buttons>
          <S.Login onClick={() => navigate('/auth/login')}>Login</S.Login>
          <S.Submit onClick={() => navigate('/auth/register')}>Start for free</S.Submit>
        </S.Buttons>
      </S.Nav>
      <S.Content>
        <S.Header>Organize your work and life.</S.Header>
        <S.Text>Become focused, organized, and calm with doit.</S.Text>
        <S.Text>The best task manager and to-do list app.</S.Text>
        <S.Submit onClick={() => navigate('/auth/register')}>Start for free</S.Submit>
      </S.Content>
      {isDesktop && <S.Image />}
    </S.Wrapper>
  );
};
