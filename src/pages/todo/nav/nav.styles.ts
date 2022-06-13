import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.baseColors.red};
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
`;

const Text = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.baseColors.white};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const Logout = styled.div`
  color: ${({ theme }) => theme.baseColors.red};
  background-color: ${({ theme }) => theme.baseColors.white};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-left: 20px;
`;

export default { Wrapper, Text, Logout };
