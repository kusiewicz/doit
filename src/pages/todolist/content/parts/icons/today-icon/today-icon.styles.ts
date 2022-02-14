import styled from 'styled-components';

import { ReactComponent as Today } from '@assets/icons/inbox.svg';

const TodayIcon = styled(Today)`
  color: ${({ theme }) => theme.baseColors.blue};
`;

export default { TodayIcon };
