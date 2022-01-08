import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
`;

const Icon = styled.i<{ color?: string }>`
  display: inline-block;
  font-size: 18px;
  position: relative;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  }
`;

export const Text = styled.span`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left: ${({ theme }) => theme.spacing.normal};
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export default { Wrapper, Icon, Text };
