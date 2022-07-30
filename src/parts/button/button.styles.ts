import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.submitBtn};
  padding: 6px 12px;
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  border-radius: 4px;
  line-height: 17px;
  margin-top: ${({ theme }) => theme.spacing.xxlarge};
  display: inline-block;
  border: none;

  &:hover {
    cursor: pointer;

    background: ${({ theme }) => theme.colors.submitBtnHover};
  }
`;

export default { Button };
