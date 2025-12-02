import styled from "styled-components";

export const SMenu = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  border-left: 1px solid ${({ theme }) => theme.colors.border.main};
  border-right: 1px solid ${({ theme }) => theme.colors.border.main};
  border-top: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: 12px 12px 0 0;
  z-index: 1000;

  position: fixed;
  background: ${({ theme }) => theme.colors.background.additional};
  bottom: 0;
  left: 0;
  padding: 10px 0;
  width: 100%;
`;

export const SMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
