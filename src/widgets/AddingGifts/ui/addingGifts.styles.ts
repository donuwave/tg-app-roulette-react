import styled from "styled-components";
import { Button } from "antd";

export const SAddPvp = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.active.main};
    border-color: #666666;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;

    &&:hover {
      background: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.active.main};
    }
  }
`;

export const SHeaderBottomSheet = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SHeaderTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 18px;
  font-weight: 700;
`;

export const SFooter = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background: #282729;
  gap: 7px;
  grid-template-columns: 1fr 1fr;
`;

export const SShopButton = styled(Button)`
  &.ant-btn {
    background: transparent;
    color: ${({ theme }) => theme.colors.text.main};
    border-radius: 16px;
    font-weight: 700;
    height: 40px;
    cursor: pointer;
  }
`;

export const SAddChoice = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.text.main};
    color: ${({ theme }) => theme.colors.background.primary};
    border-radius: 16px;
    height: 40px;
    font-weight: 700;
  }
`;
