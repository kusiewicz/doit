import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.baseColors.grey};
  height: 100%;
  width: 100%:
`;

const Text = styled.p`
  font-size: 15px;
`;

export default { Wrapper, Text };
