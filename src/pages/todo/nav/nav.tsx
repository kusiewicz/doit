import S from './nav.styles';
import { useUserInfo } from '@lib/firebase/use-user-info';
import { signOut } from 'firebase/auth';
import { auth } from '@lib/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

export const Nav = ({
  menuVisibility,
  setMenuVisibility,
}: {
  menuVisibility: boolean;
  setMenuVisibility: Dispatch<SetStateAction<boolean>>;
}) => {
  const { user } = useUserInfo();
  const navigate = useNavigate();
  console.log(setMenuVisibility);

  const hamburger = () => (
    <S.Hamburger
      isOpened={menuVisibility}
      onClick={() => setMenuVisibility((visibility) => !visibility)}
    >
      <S.Line />
      <S.Line />
      <S.Line />
    </S.Hamburger>
  );

  return (
    <S.Wrapper>
      {hamburger()}
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
