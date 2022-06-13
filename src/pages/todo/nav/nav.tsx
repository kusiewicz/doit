import S from './nav.styles';
import { useUserInfo } from '@lib/use-user-info';
import { signOut } from 'firebase/auth';
import { auth } from '@lib/firebase';

export const Nav = () => {
  const { name } = useUserInfo();

  return (
    <S.Wrapper>
      <S.Text>{name}</S.Text>
      <S.Logout
        onClick={() => {
          signOut(auth);
        }}
      >
        Sign out
      </S.Logout>
    </S.Wrapper>
  );
};
