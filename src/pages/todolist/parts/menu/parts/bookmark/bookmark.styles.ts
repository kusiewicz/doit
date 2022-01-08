import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: center;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.baseColors.grey};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.baseColors.grey};
    `}
`;

export const Text = styled.span`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left: ${({ theme }) => theme.spacing.normal};
  font-size: ${({ theme }) => theme.fontSize.small};
  position: relative;
  top: 1px;
`;

export default { Wrapper, Text };
