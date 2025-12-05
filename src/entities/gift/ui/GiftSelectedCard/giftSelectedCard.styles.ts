import styled from "styled-components";
import { Button } from "antd";

interface ISGiftCardProps {
  $isChoice: boolean;
}

export const SGiftCard = styled.div<ISGiftCardProps>`
  position: relative;
  display: grid;
  grid-template-rows: 78px 1fr;
  grid-template-columns: 1fr;
  height: 120px;
  border: 1px solid ${({ $isChoice }) => ($isChoice ? "white" : "#3d3c3e")};
  border-radius: 16px;
  color: white;
  overflow: hidden;
`;

export const SImg = styled.img`
  width: 100px;
  max-height: 78px;
  object-fit: cover;
`;

export const SChoice = styled(Button)`
  position: absolute;
  right: 4px;
  top: 4px;

  &.ant-btn {
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 99%;
  }

  & .ant-btn-icon {
    height: inherit;
  }
`;

export const SContent = styled.div`
  display: grid;
  align-content: center;
  text-align: center;
  justify-content: center;
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
