import styled from "styled-components";
import { Button } from "antd";

export const SCounter = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  align-items: center;
  max-width: 275px;
  min-width: 275px;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    font-size: 30px;
    border-radius: 15px;
    padding: 0;
    height: 50px;
    width: 50px;

    &:disabled {
      background: #3d3c3e;
      border-color: #3d3c3e;
      color: white;
    }
  }
`;

export const SCounterText = styled.div`
  font-size: 100px;
  text-align: center;
  color: white;
`;
