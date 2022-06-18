import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: center;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bookmarkHover};
  }
`;

export const Text = styled.span`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  position: relative;
  top: 1px;
`;

export default { Wrapper, Text };
