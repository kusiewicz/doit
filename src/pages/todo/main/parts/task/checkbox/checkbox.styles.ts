import styled, { css } from 'styled-components';
import { ReactComponent as TaskCheckboxCircle } from '@assets/icons/task-checkbox-circle.svg';

const Check = styled(TaskCheckboxCircle)`
  margin-top: -5px;
  margin-left: -6px;
  opacity: 0;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
`;

const Wrapper = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid ${({ theme, color }) => theme.colors[color]};
  cursor: pointer;
  overflow: hidden;

  ${({ color }) =>
    color &&
    css`
      background-color: ${({ theme }) => `${theme.colors[color]}20`};

      &:hover {
        ${Check} {
          opacity: 1;
          color: ${({ theme }) => theme.colors[color]};
        }
      }
    `}
`;

export default { Wrapper, Check };
