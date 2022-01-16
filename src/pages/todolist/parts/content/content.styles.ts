import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg';

const Wrapper = styled.div`
  padding: 36px 55px;
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
`;

const Day = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  display: inline-block;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.baseColors.darkGrey};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left: ${({ theme }) => theme.spacing.xsmall};
`;

const Plus = styled(PlusIcon)`
  color: ${({ theme }) => theme.baseColors.red};
  margin: auto;
`;

const AddTask = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.baseColors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-top: ${({ theme }) => theme.spacing.large};

  > div {
    border-radius: 50%;
    width: 17px;
    height: 17px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ theme }) => theme.spacing.small};
    position: relative;
    top: 1px;
  }

  &:hover {
    color: ${({ theme }) => theme.baseColors.red};

    > div {
      background-color: ${({ theme }) => theme.baseColors.red};
    }

    ${Plus} {
      color: white;
      transform: scale(0.8);
    }
  }
`;

export default { Wrapper, Day, Date, AddTask, Plus };
