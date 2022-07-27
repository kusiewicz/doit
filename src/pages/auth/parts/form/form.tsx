import { Divider } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from '../link/link';
import { SocialButton } from '../social-button/social-button';
import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Google } from '@assets/icons/google.svg';
import { ReactComponent as Github } from '@assets/icons/github.svg';
import S from './form.styles';
import { FormMode } from '@pages/auth/auth-page';
import { auth } from '@lib/firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const Form = () => {
  const [page, setPage] = useState<FormMode | undefined>(undefined);

  return (
    <>
      <S.Header>{page === FormMode.SIGNUP ? 'Sign up' : 'Log in'}</S.Header>
      <SocialButton
        Icon={Google}
        title="Continue with Google"
        onClick={() => {
          signInWithPopup(auth, provider);
        }}
      />
      <SocialButton Icon={Facebook} title="Continue with Facebook" onClick={() => {}} />
      <SocialButton Icon={Github} title="Continue with Github" onClick={() => {}} />
      <S.Divider>
        <span>OR</span>
      </S.Divider>
      <Outlet context={setPage} />
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
