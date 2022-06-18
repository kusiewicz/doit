import styled from 'styled-components';
import { ReactComponent as EmptyToday } from '@assets/images/empty-today.svg';
import { ReactComponent as EmptyTommorow } from '@assets/images/empty-tommorow.svg';

const Wrapper = styled.div`
  text-align: center;
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
  color: ${({ theme }) => theme.colors.emptyStateText};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const EmptyTodayIcon = styled(EmptyToday)`
  height: 300px;
  width: 320px;
`;

const EmptyTommorowIcon = styled(EmptyTommorow)`
  height: 300px;
  width: 320px;
`;

export default { Wrapper, Text, SubText, EmptyTodayIcon, EmptyTommorowIcon };
