import styled from "styled-components";
import { Button } from "antd";

export const SContent = styled.div`
  padding-top: 30px;
`;

export const STitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

export const SChoiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SCreateRoom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SCreateNewRoomSubmit = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.active.main};
    border-color: transparent;
    height: 40px;
    font-weight: 700;
  }
`;
