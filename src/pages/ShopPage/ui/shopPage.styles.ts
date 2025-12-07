import styled from "styled-components";
import { Button } from "antd";

export const SShopPage = styled.div`
  padding-top: 110px;
`;

export const SShopHeader = styled.div`
  display: grid;
  gap: 10px;
`;

export const STitle = styled.div`
  height: 43px;
  background-image: url("/shop-bg.png");
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;

export const STitleText = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const SActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.background.primary};
    border-color: #666666;
    border-radius: 99%;
  }

  & > svg {
    height: 11px;
  }

  .ant-btn-icon {
    display: grid;
  }
`;

export const SFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
