import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ highlighted?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: center;
  border-radius: 6px 0px 0px 6px;

  ${({ highlighted }) =>
    highlighted &&
    css`
      background: ${({ theme }) => theme.colors.bookmarkBackground};
    `}

  &:hover {
    background-color: #fff1e6;
  }
`;

export const Text = styled.span`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.normal};
  position: relative;
  top: 1px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

export default { Wrapper, Text };
