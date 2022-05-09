import styled from 'styled-components';

const Checkbox = styled.input`
  height: 16px;
  width: 16px;
  accent-color: green;
  margin-right: ${({ theme }) => theme.spacing.xsmall};
`;

const KeepLogged = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  margin-left: ${({ theme }) => theme.spacing.xsmall};
  cursor: pointer;
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

export default { Checkbox, KeepLogged, Text, Footer };
