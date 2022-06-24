import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.authBackground};
  min-height: 100vh;
`;

const Form = styled.div`
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.colors.authBorder};
  border-radius: 10px;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
    height: 100vh;
  }

  @media (min-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    min-width: 450px;
  }
`;

const Header = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 24px;
  display: block;
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const Divider = styled.div`
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  background-color: white;
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.large};

  span {
    position: relative;
    padding: 0 15px;
    z-index: 5;
    background-color: white;
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    color: ${({ theme }) => theme.colors.dividerTextColor};
  }

  &:before {
    width: 100%;
    height: 1px;
    content: '';
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.authBorder};
  }
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: rgba(0, 0, 0, 0.8);
  font-weight: ${({ theme }) => theme.fontWeight.light};
  display: inline-block;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;

  ${Text} {
    margin-right: ${({ theme }) => theme.spacing.xsmall};
  }
`;

export default { Wrapper, Form, Header, Divider, Text, Footer };
