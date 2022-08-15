import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;

  @media (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin-top: ${({ theme }) => theme.spacing.small};
  }

  > div:nth-last-child(2) {
    border: none;
  }
`;

export default { Wrapper };
