import styled from "styled-components";
import { Button } from "antd";

export const SBalance = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 5px;
  min-width: 75px;
  background: #292929;
  padding: 8px;
  border-radius: 20px;
`;

export const SAddButton = styled(Button)`
  &.ant-btn {
    max-width: 19px;
    max-height: 19px;
    border-radius: 999%;
    padding: 0;
  }
`;

export const SBalanceText = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 19px;
`;

export const SPlus = styled.span`
  height: 18px;
`;
