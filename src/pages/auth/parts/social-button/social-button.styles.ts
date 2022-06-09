import styled from 'styled-components';

const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 500;
  text-align: center;
  width: 100%;
  letter-spacing: 0.3px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.socialBtn};
  padding: 6px 12px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin: ${({ theme }) => theme.spacing.normal} 0;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.socialBtnHover};
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
