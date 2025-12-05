import styled from "styled-components";
import { Tag } from "antd";

export const SFilterList = styled.div`
  display: flex;
`;

export const STag = styled(Tag.CheckableTag)`
  &&.ant-tag-checkable {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 35px;
    background: #292929;

    &.ant-tag-checkable-checked {
      background: white;
    }
  }

  &.ant-tag {
    display: flex;
    gap: 5px;
  }
`;
