import styled from "styled-components";
import { Button } from "antd";

export const SHeaderTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 15px;
  font-weight: 700;
`;

export const SFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
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
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;

    &&:hover {
      background: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.active.main};
    }
  }
`;
