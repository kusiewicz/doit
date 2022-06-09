import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.normal};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.authBorder};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  outline: none;
  height: 30px;
`;

const Error = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.error};
  font-style: italic;
  margin-top: 3px;
`;

export default { Wrapper, Label, Input, Error };
