import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.navbar};
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
  color: ${({ theme }) => theme.colors.navText};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const Logout = styled.div`
  color: ${({ theme }) => theme.colors.navbar};
  background-color: white;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: auto;
  padding: 5px 8px;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  border-radius: 3px;
  cursor: pointer;
`;

export default { Wrapper, Text, Logout };
