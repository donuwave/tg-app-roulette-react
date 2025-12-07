import styled from "styled-components";
import { Button } from "antd";

export const SProfileBalance = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  background: #232323;
  border-radius: 10px;
  padding: 16px 20px;
  cursor: pointer;
  border: 1px solid transparent;
`;

export const SInfo = styled.div`
  display: grid;
  gap: 6px;
`;

export const SBalanceText = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #919191;
`;

export const SBalance = styled.div`
  display: flex;
  font-size: 18px;
  gap: 10px;
`;

export const SActions = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const SFillButton = styled(Button)`
  &.ant-btn {
    height: 42px;
    border-radius: 20px;
    font-weight: 700;
  }
`;

export const SWalletButton = styled(Button)`
  &.ant-btn {
    height: 42px;
    width: 42px;
    border-radius: 10px;
    font-weight: 700;
    background: #393939;
    padding: 0;
    border-color: transparent;
  }
`;
