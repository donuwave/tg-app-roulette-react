import styled from "styled-components";
import { Button } from "antd";

export const SAvatarPick = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  gap: 5px;
  border-radius: 14px;
  background: transparent;
  border: 1px solid #1d1d1d;
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

export const SText = styled.span`
  font-weight: 700;
  font-size: 13px;
`;

export const SPrice = styled.div`
  display: flex;
  gap: 4px;
  font-weight: 700;
  font-size: 11px;
`;

export const SChoice = styled(Button)`
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 2;

  &.ant-btn {
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 99%;
  }

  & .ant-btn-icon {
    height: inherit;
  }
`;

export const STag = styled.div`
  position: absolute;
  left: 4px;
  top: 4px;
  display: flex;
  align-items: center;
  background: #e2790c;
  color: black;
  font-size: 7px;
  font-weight: 700;
  border-radius: 10px;
  padding: 5px;
`;
