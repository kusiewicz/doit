import { useDeviceDetect } from '@utils/hooks/use-device-detect';
import { useNavigate } from 'react-router-dom';
import S from './logo.styles';

export const Logo = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  const {
    deviceData: { isDesktop },
  } = useDeviceDetect();

  return (
    <S.Wrapper className={className} onClick={() => navigate('/home')}>
      <S.AppIcon />
      {isDesktop && <S.Title>doit.</S.Title>}
    </S.Wrapper>
  );
};
