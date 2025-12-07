import styled from "styled-components";
import { Segmented } from "antd";

export const SSegmented = styled(Segmented)`
  &.ant-segmented {
    padding: 3px;
    font-weight: 700;
    border-radius: 20px;
    border: 1px solid #666666;
  }

  & .ant-segmented-item.ant-segmented-item-selected {
    font-weight: 700;
  }

  & .ant-segmented-thumb {
    padding: 3px;
  }

  & .ant-segmented-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  &.ant-segmented-item-input {
    width: 100%;
  }

  & .ant-segmented-item {
    width: 100%;
  }
`;
