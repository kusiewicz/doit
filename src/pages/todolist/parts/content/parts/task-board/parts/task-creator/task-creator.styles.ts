import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.baseColors.grey};
  padding: ${({ theme }) => theme.spacing.normal};
`;

const TitleInput = styled.textarea`
  height: 21px;
  font-size: ${({ theme }) => theme.fontSize.small};
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  letter-spacing: 0.5px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

const DescriptionInput = styled(TitleInput)`
  height: 28px;
  margin-top: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  margin-bottom: ${({ theme }) => theme.spacing.normal};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default { Wrapper, TitleInput, DescriptionInput };
