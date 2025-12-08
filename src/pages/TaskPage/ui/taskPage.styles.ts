import styled from "styled-components";
import { Button } from "antd";

export const STaskPage = styled.div`
  display: grid;
  gap: 20px;
`;

export const STitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;

export const SList = styled.div`
  display: grid;
  gap: 15px;
`;

export const SCard = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  background: #232323;
  border-radius: 26px;
`;

export const STag = styled.div`
  background: #e2790c;
  color: #040404;
  padding: 7px;
  font-weight: 700;
  font-size: 12px;
  border-radius: 20px;
`;

export const STitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const SDescription = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const SAction = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const SStart = styled(Button)`
  &.ant-btn {
    background: #00b2bc;
    border-color: transparent;
    border-radius: 20px;
    font-weight: 700;
    font-size: 12px;
  }
`;

export const SCheck = styled(Button)`
  &.ant-btn {
    background: #393939;
    border-color: transparent;
    border-radius: 20px;
    font-weight: 700;
    font-size: 12px;
    color: white;
  }
`;
