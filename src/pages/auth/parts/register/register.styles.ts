import styled from 'styled-components';

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

export default { Text, Footer };
