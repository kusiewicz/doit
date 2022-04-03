import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg';

const Plus = styled(PlusIcon)`
  color: ${({ theme }) => theme.baseColors.red};
  margin: auto;
`;

const PlusHover = styled.div`
  border-radius: 50%;
  width: 17px;
  height: 17px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.small};
  position: relative;
  top: 1px;
`;

const Add = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.baseColors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.normal};

  &:hover {
    color: ${({ theme }) => theme.baseColors.red};

    ${PlusHover} {
      background-color: ${({ theme }) => theme.baseColors.red};
    }

    ${Plus} {
      color: white;
      transform: scale(0.8);
    }
  }
`;

export default { Plus, PlusHover, Add };
