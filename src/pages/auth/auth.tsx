import { Logo } from '@parts/logo/logo';
import S from './auth.styles';
import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Google } from '@assets/icons/google.svg';
import { ReactComponent as Github } from '@assets/icons/github.svg';
import { Outlet } from 'react-router-dom';
import { SocialButton } from './parts/social-button/social-button';

export const Auth = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <Logo />
        <S.Header>Sign up</S.Header>
        <SocialButton Icon={Google} title="Continue with Google" />
        <SocialButton Icon={Facebook} title="Continue with Facebook" />
        <SocialButton Icon={Github} title="Continue with Github" />
        <S.Divider>
          <span>OR</span>
        </S.Divider>
        <Outlet />
      </S.Form>
    </S.Wrapper>
  );
};
