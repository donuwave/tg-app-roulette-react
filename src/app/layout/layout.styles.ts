import styled from "styled-components";

export const SLayout = styled.div`
  position: relative;
  font-family: "Inter", serif;
  padding: 60px 8px 100px 8px;
  color: ${({ theme }) => theme.colors.text.main};
  background: ${({ theme }) => theme.colors.background.primary};
  min-height: 100dvh;
  min-width: 375px;
  width: 100%;
`;

export const SFixedContent = styled.div`
  width: 100%;
  min-width: 375px;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 55px;
  background: ${({ theme }) => theme.colors.background.primary};
  padding: 8px;
  z-index: 1000;
`;
