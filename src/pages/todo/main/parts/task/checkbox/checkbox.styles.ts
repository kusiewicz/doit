import styled from 'styled-components';
import { ReactComponent as TaskCheckboxCircle } from '@assets/icons/task-checkbox-circle.svg';

const Check = styled(TaskCheckboxCircle)`
  margin-top: -4px;
  margin-left: -4px;
  color: ${({ theme }) => theme.colors.checkbox};
  opacity: 0;
  transition: opacity .15s cubic-bezier(0.4, 0, 1, 1);
`;

const Wrapper = styled.div`
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.checkbox};

  &:hover {
    background: hsla(0, 0%, 50.2%, 0.2);

    ${Check} {
      opacity: 1;
    }
  }
`;

export default { Wrapper, Check };
