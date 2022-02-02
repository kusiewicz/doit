import styled from 'styled-components';

import { ReactComponent as Incoming } from '@assets/icons/incoming.svg';

const IncomingIcon = styled(Incoming)`
  color: ${({ theme }) => theme.baseColors.purple};
`;

export default { IncomingIcon };
