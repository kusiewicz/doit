import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.submitBtn};
  border-radius: 3px;
  text-align: center;
  height: 35px;
  color: white;
  line-height: 36px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: all 0.3s ease-out;
  margin-top: ${({ theme }) => theme.spacing.large};

  &:hover {
    background-color: ${({ theme }) => theme.colors.submitBtnHover};
  }
`;

export default { Wrapper };
