import styled, { css } from 'styled-components';

const Menu = styled.div<{ shouldHide: boolean }>`
  background-color: ${({ theme }) => theme.colors.menuBackground};
  width: 300px;
  padding-top: 30px;
  padding-left: 35px;
  min-height: calc(100% - 44px);
  transition: 0.5s;

  @keyframes hideMenu {
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(-300px, 0);
    }

    100% {
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }

  @keyframes showMenu {
    0% {
      transform: translate(-300px, 0);
    }

    50% {
      transform: translate(0, 0);
    }

    100% {
      width: 300px;
      opacity: 1;
    }
  }

  ${({ shouldHide }) =>
    shouldHide
      ? css`
          /* animation: hideMenu 0.5s; */
          transform: translate(-300px, 0);
          opacity: 0;
          width: 0;
          padding-left: 0;
          /* position: absolute;
          top: 0;
          left: 0; */
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
