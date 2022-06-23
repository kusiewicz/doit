import { Logo } from '@parts/logo/logo';
import S from './auth-page.styles';
import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Google } from '@assets/icons/google.svg';
import { ReactComponent as Github } from '@assets/icons/github.svg';
import { Outlet } from 'react-router-dom';
import { SocialButton } from './parts/social-button/social-button';
import { useState } from 'react';

export enum AuthSite {
  SIGNUP = 'signup',
  LOGIN = 'login',
}

export const AuthPage = () => {
  const [page, setPage] = useState<AuthSite.SIGNUP | AuthSite.LOGIN | undefined>(undefined);

  return (
    <S.Wrapper>
      <S.Form>
        <Logo />
        <S.Header>{page === AuthSite.SIGNUP ? 'Sign up' : 'Log in'}</S.Header>
        <SocialButton Icon={Google} title="Continue with Google" />
        <SocialButton Icon={Facebook} title="Continue with Facebook" />
        <SocialButton Icon={Github} title="Continue with Github" />
        <S.Divider>
          <span>OR</span>
        </S.Divider>
        <Outlet context={setPage} />
      </S.Form>
    </S.Wrapper>
  );
};
