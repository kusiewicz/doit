import styled from 'styled-components';

const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;
  width: 100%;
  letter-spacing: 0.3px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.registerBtn};
  padding: 6px 12px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin: ${({ theme }) => theme.spacing.normal} 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.registerBtnHover};
    cursor: pointer;

    ${Title} {
      text-decoration: underline;
    }
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export default { Wrapper, Title };
