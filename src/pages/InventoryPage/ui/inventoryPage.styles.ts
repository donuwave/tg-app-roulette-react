import styled from "styled-components";
import { Button } from "antd";

export const STitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 12px;
  padding-top: 21px;
`;

export const SInventoryPage = styled.div`
  padding-top: 80px;
  padding-bottom: 50px;
`;

export const SFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 7px;
`;

export const SSubmit = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.text.main};
    color: ${({ theme }) => theme.colors.background.primary};
    border-radius: 16px;
    height: 40px;
    font-weight: 700;
  }
`;

export const SAddPvp = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.active.main};
    border-color: #666666;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 700;
    height: 40px;

    &&:hover {
      background: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.active.main};
    }
  }
`;

export const SHeadFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;
