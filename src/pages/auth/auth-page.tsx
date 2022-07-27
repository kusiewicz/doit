import { Logo } from '@parts/logo/logo';
import S from './auth-page.styles';
import { Form } from './parts/form/form';

export enum FormMode {
  SIGNUP = 'signup',
  LOGIN = 'login',
}

export const AuthPage = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo />
        <Form />
      </S.Content>
    </S.Wrapper>
  );
};
