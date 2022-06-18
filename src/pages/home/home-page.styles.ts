import styled from 'styled-components';
import { Logo as LogoBase } from '@parts/logo/logo';
import { Submit as SubmitButtonBase } from '@pages/auth/parts/submit-button/submit-button';

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
`;

const Buttons = styled.div``;

const Nav = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    margin-top: 0;
  }
`;

const Logo = styled(LogoBase)`
  display: inline-block;

  svg {
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 32px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  text-align: center;
`;

const Header = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 58px;
  line-height: 64px;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.almostBlack};
`;

const Text = styled.h2`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.almostBlack};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const Submit = styled(SubmitButtonBase)`
  width: 160px;
  height: 45px;
  letter-spacing: 0.7px;
  font-size: 17px;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  display: inline-block;
`;

const Login = styled(Submit)`
  background-color: transparent;
  width: 80px;
  color: ${({ theme }) => theme.colors.buttonAnother};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-right: ${({ theme }) => theme.spacing.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.loginHover};
  }
`;

export default { Wrapper, Nav, Logo, Content, Header, Text, Submit, Login, Buttons };
