import styled from 'styled-components';
import { ReactComponent as AppIconBase } from '@assets/icons/app-icon.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AppIcon = styled(AppIconBase)`
  height: 25px;
  width: 25px;
  display: inline-block;
`;

const Title = styled.span`
  font-family: Lato;
  font-size: 20px;
  margin-left: ${({ theme }) => theme.spacing.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.logo};
  letter-spacing: 0.2px;
`;

export default { Wrapper, AppIcon, Title };
