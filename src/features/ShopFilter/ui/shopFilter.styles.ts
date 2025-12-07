import styled from "styled-components";
import { Button, Checkbox } from "antd";

export const SHeader = styled.div`
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SFilterButton = styled(Button)`
  &.ant-btn {
    background: #2f2f2f;
    color: white;
    border: 1px solid #676767;
    border-radius: 30px;
    font-weight: 700;
  }
`;

export const SContent = styled.div`
  display: grid;
  gap: 20px;
`;

export const SCheckbox = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }

  & .ant-checkbox-label {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 11px;
    font-size: 15px;
  }

  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background: ${({ theme }) => theme.colors.active.main};
  }
`;
