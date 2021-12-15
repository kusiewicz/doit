import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ focused?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small};
  ${({ focused }) =>
    focused &&
    css`
      background-color: ${({ theme }) => theme.color.white};
    `}
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
  display: inline-block;
`;

const TaskNum = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.colors.grey};
`;

const Icon = styled.div``;

export default { Wrapper, Title, TaskNum, Icon };
