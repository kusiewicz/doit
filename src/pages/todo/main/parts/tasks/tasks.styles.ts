import styled from 'styled-components';

const Day = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.xsmall};
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.baseColors.darkGrey};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export default { Day, Date };
