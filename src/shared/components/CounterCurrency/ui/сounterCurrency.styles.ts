import styled from "styled-components";
import { Button } from "antd";

export const SCounterCurrency = styled.div`
  display: grid;
  grid-template-columns: 25px 110px 25px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: #2f2f2f;
  border: 1px solid #686868;
  padding: 4px;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    background: #676767;
    width: 25px;
    height: 25px;
    border-color: transparent;
    border-radius: 22px;
    padding: 0;
    color: #a1a1a1;
    font-size: 30px;

    & > span {
      display: flex;
      align-items: center;
    }
  }
`;

export const SText = styled.span`
  text-align: center;
`;
