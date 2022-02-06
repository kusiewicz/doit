import styled from 'styled-components';
import { ReactComponent as EmptyToday } from '@assets/images/empty-today.svg';
import { ReactComponent as EmptyTommorow } from '@assets/images/empty-tommorow.svg';

const Wrapper = styled.div`
  text-align: center;
  margin-top: 40px;
  max-width: 360px;
  margin: auto;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin: ${({ theme }) => theme.spacing.large} 0;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const SubText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.baseColors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const AddTaskButton = styled.div`
  background-color: ${({ theme }) => theme.baseColors.red};
  padding: 6px 12px;
  color: ${({ theme }) => theme.baseColors.white};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  width: 110px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  border-radius: 3px;
  line-height: 17px;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing.xxlarge};

  &:hover {
    cursor: pointer;
  }
`;

const EmptyTodayIcon = styled(EmptyToday)`
  height: 200px;
  width: 220px;
`;

const EmptyTommorowIcon = styled(EmptyTommorow)`
  height: 200px;
  width: 220px;
`;

export default { Wrapper, Text, SubText, AddTaskButton, EmptyTodayIcon, EmptyTommorowIcon };
