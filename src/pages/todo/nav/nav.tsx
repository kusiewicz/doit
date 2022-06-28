import S from './nav.styles';
import { useUserInfo } from '@lib/firebase/use-user-info';
import { signOut } from 'firebase/auth';
import { auth } from '@lib/firebase/firebase';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const { user } = useUserInfo();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Text>{user.username}</S.Text>
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
