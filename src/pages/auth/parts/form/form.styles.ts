import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.colors.authBorder};
  border-radius: 10px;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.device.tablet}) {
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

export default { Wrapper, Header, Divider };
