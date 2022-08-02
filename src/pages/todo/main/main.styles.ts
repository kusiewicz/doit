import styled, { css } from 'styled-components';

const Menu = styled.div<{ shouldHide: boolean }>`
  background-color: ${({ theme }) => theme.colors.menuBackground};
  width: 300px;
  padding-top: 30px;
  padding-left: 35px;
  min-height: calc(100% - 44px);
  transition: transform 1s ease-in-out;

  ${({ shouldHide }) =>
    shouldHide &&
    css`
      transform: translate(-300px, 0);
    `}
`;

const Content = styled.div`
  padding: 36px 55px;
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  background-image: url('/assets/images/round.svg');
`;

const Day = styled.span`
  font-family: Quicksand;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.xsmall};
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-weight: 500;
`;

const Date = styled.span`
  font-family: Quicksand;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.dateText};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

export default { Menu, Content, Day, Date };
