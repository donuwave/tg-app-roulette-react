import styled from "styled-components";

interface ISGiftCardProps {
  $isChoice: boolean;
}

export const SGiftCard = styled.div<ISGiftCardProps>`
  display: grid;
  grid-template-rows: 78px 1fr;
  grid-template-columns: 1fr;
  height: 120px;
  background: ${({ $isChoice }) => ($isChoice ? "white" : "#282729")};
  border: 1px solid #3d3c3e;
  border-radius: 16px;
  color: ${({ $isChoice }) => ($isChoice ? "#282729" : "white")};
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
`;

export const SName = styled.span`
  font-size: 12px;
`;

export const SPrice = styled.span`
  font-size: 8px;
`;
