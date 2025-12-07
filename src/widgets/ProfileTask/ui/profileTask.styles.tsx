import styled from "styled-components";
import { Button } from "antd";

export const SProfileTasks = styled.div`
  display: grid;
  gap: 15px;
`;

export const SProfileTask = styled.div`
  display: grid;
  gap: 10px;
  padding: 14px;
  background: #232323;
  border-radius: 9px;
`;

export const STitle = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

export const SResult = styled.div`
  display: grid;
  gap: 6px;
  background: #2f2f2f;
  border-radius: 9px;
  padding: 14px;
`;

export const SResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 12px;
`;

export const SResultItemActive = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.active.main};
`;

export const SResultItemTitle = styled.span`
  color: #828282;
`;

export const SActiveButton = styled(Button)`
  &.ant-btn {
    background: #00b2bc;
    border-radius: 20px;
    border-color: transparent;
    font-weight: 700;
    height: 40px;
    font-size: 12px;
  }
`;

export const SActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px;
`;

export const SSecondaryButton = styled(Button)`
  &.ant-btn {
    background: #393939;
    color: white;
    border-radius: 20px;
    border-color: transparent;
    font-weight: 700;
    height: 40px;
    font-size: 12px;
  }
`;

export const SWhiteButton = styled(Button)`
  &.ant-btn {
    background: white;
    color: ${({ theme }) => theme.colors.background.primary};
    border-radius: 20px;
    border-color: transparent;
    font-weight: 700;
    height: 40px;
    font-size: 12px;
  }
`;
