import { Logo } from '@parts/logo/logo';
import React from 'react';
import S from './form.styles';
import { RegisterButton } from './parts/register-button/register-button';
import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Google } from '@assets/icons/google.svg';
import { ReactComponent as Github } from '@assets/icons/github.svg';
export const Form = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.Header>Sign up</S.Header>
      <RegisterButton Icon={Google} title="Continue with Google" />
      <RegisterButton Icon={Facebook} title="Continue with Facebook" />
      <RegisterButton Icon={Github} title="Continue with Github" />
      <S.Divider>
        <span>OR</span>
      </S.Divider>
    </S.Wrapper>
  );
};
