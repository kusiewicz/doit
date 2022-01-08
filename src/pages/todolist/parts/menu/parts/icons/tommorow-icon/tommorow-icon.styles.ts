import styled from 'styled-components';
import { ReactComponent as Tommorow } from '@assets/icons/tommorow.svg';

const TommorowIcon = styled(Tommorow)`
color: ${({ theme }) => theme.baseColors.lightGreen};
`;

export default { TommorowIcon };
