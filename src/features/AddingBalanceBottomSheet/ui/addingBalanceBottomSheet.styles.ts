import styled from "styled-components";
import { Button, Segmented } from "antd";

export const SHeaderTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 18px;
  font-weight: 700;
`;

export const SFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

export const SContent = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const SSubmit = styled(Button)`
  &.ant-btn {
    background: #00b2bc;
    color: ${({ theme }) => theme.colors.background.primary};
    border-radius: 16px;
    height: 40px;
    font-weight: 700;
  }
`;

export const SSegmented = styled(Segmented)`
  max-width: 160px;
  margin: 0 auto;

  &.ant-segmented {
    height: 54px;
    background: #3d3c3e;
    border-radius: 20px;
  }

  &.ant-segmented .ant-segmented-item-label {
    height: 52px;
    width: 52px;
  }

  & .ant-segmented-item-selected {
    background: #504f51;
  }

  & .ant-segmented-thumb {
    background: #504f51;
  }
`;

export const SIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
