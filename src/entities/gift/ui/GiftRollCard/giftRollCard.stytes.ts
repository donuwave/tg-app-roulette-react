import styled from "styled-components";

export const SGiftCard = styled.div`
  display: grid;
  grid-template-rows: 78px 1fr;
  grid-template-columns: 1fr;
  height: 120px;
  background: transparent;
  border-radius: 16px;
  color: white;
`;

export const SImg = styled.img`
  width: 100%;
  max-height: 78px;
  object-fit: cover;
`;

export const SContent = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: center;
`;

export const SName = styled.span`
  font-size: 12px;
`;

export const SPrice = styled.span`
  display: flex;
  align-items: center;
  font-size: 8px;
  gap: 4px;
`;

export const SIcon = styled.img`
  width: 8px;
  height: 8px;
`;
