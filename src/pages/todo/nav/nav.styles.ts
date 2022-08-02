import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.navbar};
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
`;

const Text = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.navText};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const Logout = styled.div`
  color: ${({ theme }) => theme.colors.navbar};
  background-color: white;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: auto;
  padding: 5px 8px;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  border-radius: 3px;
  cursor: pointer;
`;

const Line = styled.span`
  height: 2px;
  display: block;
  width: 100%;
  border-radius: 10px;
  background: white;
`;

const Hamburger = styled.div<{ isOpened: boolean }>`
  display: block;
  height: 18px;
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 5px;

  ${Line}:first-child {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  ${Line}:nth-child(2) {
    transition: transform 0.2s ease-in-out;
  }

  ${Line}:last-child {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      ${Line}:first-child {
        transform: rotate(45deg);
      }

      ${Line}:nth-child(2) {
        transform: scaleY(0);
      }

      ${Line}:last-child {
        transform: rotate(-45deg);
      }
    `}
`;

export default { Wrapper, Text, Logout, Hamburger, Line };
