import styled, { css } from 'styled-components';

const Menu = styled.div<{ shouldHide: boolean }>`
  background-color: ${({ theme }) => theme.colors.menuBackground};
  width: 300px;
  padding-top: 30px;
  padding-left: 35px;
  min-height: calc(100% - 44px);
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    position: absolute;
    top: 44px;
    width: 100%;
  }

  ${({ shouldHide }) =>
    shouldHide
      ? css`
          transform: translate(-300px, 0);
          opacity: 0;
          width: 0;
          padding-left: 1px;
        `
      : css`
          transform: translate(0, 0);
          opacity: 1;
        `};
`;

const Content = styled.div<{ shouldHide: boolean }>`
  padding: 36px 55px;
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  min-height: calc(100% - 44px);

  @media (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    padding: 30px;
  }
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
