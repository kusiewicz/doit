import styled, { ThemeConsumer } from "styled-components";

const Wrapper = styled.div``;

const Text = styled.p<{ done: boolean }>`
  font-size: 14px;
  color: ${({ done }) => done ? theme.color.}
`;
