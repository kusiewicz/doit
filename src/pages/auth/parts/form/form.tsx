import { Divider } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from '../link/link';
import { SocialButton } from '../social-button/social-button';
import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Google } from '@assets/icons/google.svg';
import { ReactComponent as Github } from '@assets/icons/github.svg';
import S from './form.styles';
import { FormMode } from '@pages/auth/auth-page';
import { auth } from '@lib/firebase/firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  browserSessionPersistence,
  setPersistence,
} from 'firebase/auth';
import { useMutation } from 'react-query';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export interface OutletContext {
  setPage: Dispatch<SetStateAction<FormMode | undefined>>;
  keepLogged: boolean;
  setKeepLogged: Dispatch<SetStateAction<boolean>>;
}

export const Form = () => {
  const [page, setPage] = useState<FormMode | undefined>(undefined);
  const [keepLogged, setKeepLogged] = useState<boolean>(true);

  const signIn = async (
    provider: FacebookAuthProvider | GithubAuthProvider | GoogleAuthProvider,
  ) => {
    return signInWithPopup(auth, provider);
  };

  const { mutate } = useMutation(signIn, {
    onSuccess: () => {
      if (!keepLogged) {
        setPersistence(auth, browserSessionPersistence);
      }
    },
  });

  return (
    <>
      <S.Header>{page === FormMode.SIGNUP ? 'Sign up' : 'Log in'}</S.Header>
      <SocialButton
        Icon={Google}
        title="Continue with Google"
        onClick={() => mutate(googleProvider)}
      />
      <SocialButton
        Icon={Facebook}
        title="Continue with Facebook"
        onClick={() => mutate(facebookProvider)}
      />
      <SocialButton
        Icon={Github}
        title="Continue with Github"
        onClick={() => mutate(githubProvider)}
      />
      <S.Divider>
        <span>OR</span>
      </S.Divider>
      <Outlet context={{ setPage, keepLogged, setKeepLogged }} />
      <Divider />
      <S.Footer>
        <S.Text>
          {page === FormMode.SIGNUP ? 'Already signed up?' : "Don't have an account?"}
        </S.Text>
        <Link to={page === FormMode.SIGNUP ? '/auth/login' : '/auth/register'} color="Red">
          {page === FormMode.SIGNUP ? 'Go to login' : 'Sign up'}
        </Link>
      </S.Footer>
    </>
  );
};
