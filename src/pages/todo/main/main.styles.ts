import styled from 'styled-components';

const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.menuBackground};
  width: 300px;
  padding-top: 30px;
  padding-left: 35px;
  min-height: calc(100% - 44px);
`;

const Content = styled.div`
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
  color: ${({ theme }) => theme.colors.dateText};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-transform: capitalize;
`;

export default { Menu, Content, Day, Date };
