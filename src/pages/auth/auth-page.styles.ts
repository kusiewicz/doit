import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.authBackground};
  min-height: 100vh;
`;

const Content = styled.div`
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

export default { Wrapper, Content };
