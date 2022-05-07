import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.authBackground};
  min-height: 100vh;
`;

export default { Wrapper };
