import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  position: relative;
`;

export default { Wrapper };
