import styled, { css } from 'styled-components';
import { ReactComponent as ButtonIcon } from '@assets/icons/calendar-button.svg';

const Button = styled.div<{ color: string }>`
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.baseColors.grey};
  width: fit-content;
  display: flex;
  align-items: center;
  line-height: 9px;
  font-weight: ${({ theme }) => theme.fontWeight.light};

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colors[color]};
    `};
`;

const CalendarIcon = styled(ButtonIcon)`
  margin-right: ${({ theme }) => theme.spacing.xxsmall};
`;

export default { Button, CalendarIcon };
