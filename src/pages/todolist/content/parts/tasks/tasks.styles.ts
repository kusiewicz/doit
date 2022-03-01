import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 36px 55px;
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
`;

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

export default { Wrapper, Day, Date };
