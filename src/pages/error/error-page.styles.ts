import styled from 'styled-components';
import { Button as ButtonBase } from '@parts/button/button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Text = styled.h1`
  font-size: 64px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  text-align: center;
  margin-bottom: 25px;

  @media (max-width: ${({ theme }) => theme.deviceBreakpoint.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 30px;
  }
`;

const SubText = styled(Text)`
  font-size: 40px;
  font-weight: bold;
`;

const Button = styled(ButtonBase)`
  width: 250px;
  height: 50px;
  font-size: 30px;
`;

export default { Wrapper, Text, SubText, Button };
