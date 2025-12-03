import styled from "styled-components";

export const SLotsList = styled.div`
  padding-top: 18px;
  display: grid;
  grid-template-rows: max-content 1fr;
  gap: 20px;
`;

export const SLotsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SCount = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const SIdentifier = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SList = styled.div`
  display: grid;
  gap: 10px;
`;
