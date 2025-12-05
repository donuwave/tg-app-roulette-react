import styled from "styled-components";
import { Button } from "antd";

export const SInventoryFloat = styled.div`
  position: fixed;
  bottom: 100px;
  left: 0;
  z-index: 10;
  display: grid;
  gap: 10px;
  width: 100%;
  padding: 0 8px;
  grid-template-columns: 40px 1.2fr 1.5fr;
`;

export const STelegramButton = styled(Button)`
  &.ant-btn {
    height: 40px;
    width: 40px;
    background: #353535;
    border-radius: 99%;
    border: 1px solid ${({ theme }) => theme.colors.border.main};
  }

  & .ant-btn-icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SSelectedButton = styled(Button)`
  &.ant-btn {
    height: 40px;
    border-radius: 20px;
    background: #353535;
    border: 1px solid ${({ theme }) => theme.colors.border.main};
    color: ${({ theme }) => theme.colors.text.main};
  }
`;

export const SActionButton = styled(Button)`
  &.ant-btn {
    height: 40px;
    border-radius: 20px;
  }
`;
