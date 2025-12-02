import styled from "styled-components";

export const SLastWinCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: max-content;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: 14px;
  padding: 5px;
`;

export const SRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;

export const STitle = styled.span`
  font-size: 9px;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SPrice = styled.span`
  font-size: 9px;
  color: ${({ theme }) => theme.colors.active.main};
`;

export const SSecondary = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 8px;
`;

export const SChance = styled.span`
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 8px;
  align-self: end;
`;
