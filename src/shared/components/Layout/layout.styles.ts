import styled from "styled-components";

export const SLayout = styled.div`
  font-family: "Inter", serif;
  padding: 0 8px 100px 8px;
  color: ${({ theme }) => theme.colors.text.main};
  background: ${({ theme }) => theme.colors.background.primary};
  min-height: 100dvh;
`;
