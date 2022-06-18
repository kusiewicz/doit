import S from './nav.styles';
import { useUserInfo } from '@lib/use-user-info';
import { signOut } from 'firebase/auth';
import { auth } from '@lib/firebase';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const { name } = useUserInfo();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Text>{name}</S.Text>
      <S.Logout
        onClick={() => {
          signOut(auth);
          navigate('/home');
        }}
      >
        Sign out
      </S.Logout>
    </S.Wrapper>
  );
};
