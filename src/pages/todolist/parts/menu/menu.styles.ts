import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.baseColors.grey};
  width: 300px;
  flex: 1;
  padding-top: 30px;
  padding-left: 35px;
`;

const Text = styled.p`
  font-size: 15px;
`;

export default { Wrapper, Text };
