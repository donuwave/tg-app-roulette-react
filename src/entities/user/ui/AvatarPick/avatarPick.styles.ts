import styled from "styled-components";
import { Button } from "antd";

export const SAvatarPick = styled.div<{ $active: boolean }>`
  display: grid;
  justify-items: center;
  gap: 5px;
  border-radius: 14px;
  background: transparent;
  border: 1px solid ${({ $active }) => ($active ? "white" : "#1d1d1d")};
  overflow: hidden;
  padding-bottom: 7px;
`;

export const SAvatarBg = styled.div`
  background: #373737;
  width: 100%;
  border-radius: 14px;
  border: 1px solid transparent;
  height: 100px;
  display: grid;
  align-items: end;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    border-radius: 20px;

    &:disabled {
      background: #373737;
      color: #959595;
    }
  }
`;
