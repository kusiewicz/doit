import S from './nav.styles';
import { useUserInfo } from '@lib/firebase/use-user-info';
import { signOut } from 'firebase/auth';
import { auth } from '@lib/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { LoadingPage } from '@pages/loading/loading-page';

export const Nav = ({
  menuVisibility,
  setMenuVisibility,
}: {
  menuVisibility: boolean;
  setMenuVisibility: Dispatch<SetStateAction<boolean>>;
}) => {
  const { user } = useUserInfo();
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation(async () => signOut(auth), {
    onSuccess: () => navigate('/home'),
  });

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

  if (isLoading) return <LoadingPage />;

  return (
    <S.Wrapper>
      {hamburger()}
      <S.Text>{user.username}</S.Text>
      <S.Logout onClick={() => mutate()}>Sign out</S.Logout>
    </S.Wrapper>
  );
};
