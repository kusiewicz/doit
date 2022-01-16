import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.baseColors.lightGrey};
  width: 300px;
  padding-top: 30px;
  padding-left: 35px;
  height: calc(100% - 44px);
`;


export default { Wrapper };
