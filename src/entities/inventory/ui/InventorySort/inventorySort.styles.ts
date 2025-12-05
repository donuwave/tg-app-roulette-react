import styled from "styled-components";
import { Button, Checkbox } from "antd";

export const STitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SFooter = styled.div`
  display: grid;
  width: 100%;
`;

export const SSubmit = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.text.main};
    color: ${({ theme }) => theme.colors.background.primary};
    border-radius: 16px;
    height: 40px;
    font-weight: 700;
  }
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
    font-size: 15px;
  }

  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background: ${({ theme }) => theme.colors.active.main};
  }
`;

export const SContent = styled.div`
  display: grid;
  gap: 20px;
`;

export const SAction = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.background.primary};
    border-radius: 99%;
    border: 1px solid ${({ theme }) => theme.colors.border.main};
  }
`;
