import styled from "styled-components";
import { Button } from "antd";

export const SInventoryFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SAction = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.background.primary};
    border-radius: 99%;
    border: 1px solid ${({ theme }) => theme.colors.border.main};
  }
`;

export const SFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
