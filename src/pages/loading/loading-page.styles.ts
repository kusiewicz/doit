import styled from 'styled-components';
import { ReactComponent as SpinnerBase } from '@assets/images/spinner.svg';
import { ReactComponent as LogoBase } from '@assets/icons/app-icon.svg';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.authBackground};
  z-index: 100;
`;

const Spinner = styled(SpinnerBase)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Logo = styled(LogoBase)`
  width: 64px;
  height: 64px;
`;

export default { Wrapper, Spinner, Logo };
