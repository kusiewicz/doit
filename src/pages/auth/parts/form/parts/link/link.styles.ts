import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ color?: 'Red' | 'Grey' }>`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: rgba(0, 0, 0, 0.8);
  font-weight: ${({ theme }) => theme.fontWeight.light};
  display: inline-block;

  ${({ color }) =>
    color &&
    (color === 'Red'
      ? css`
          color: ${({ theme }) => theme.colors.authSwitch};
        `
      : css`
          color: ${({ theme }) => theme.colors.authText};
        `)}

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default { Wrapper };
