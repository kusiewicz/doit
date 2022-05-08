import { Logo } from '@parts/logo/logo';
import React from 'react';
import S from './form.styles';
import { SocialButton } from './parts/social-button/social-button';
import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Google } from '@assets/icons/google.svg';
import { ReactComponent as Github } from '@assets/icons/github.svg';
import { Login } from './parts/login/login';
export const Form = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.Header>Sign up</S.Header>
      <SocialButton Icon={Google} title="Continue with Google" />
      <SocialButton Icon={Facebook} title="Continue with Facebook" />
      <SocialButton Icon={Github} title="Continue with Github" />
      <S.Divider>
        <span>OR</span>
      </S.Divider>
      <Login />
    </S.Wrapper>
  );
};
