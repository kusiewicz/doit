import styled from 'styled-components';

const Button = styled.div`
  background-color: ${({ theme }) => theme.baseColors.red};
  padding: 6px 12px;
  color: ${({ theme }) => theme.baseColors.white};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  width: 110px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  border-radius: 4px;
  line-height: 17px;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing.xxlarge};
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`;

export default { Button };
