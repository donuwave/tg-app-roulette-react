import styled from "styled-components";
import { Button, Input, Popover } from "antd";

export const SProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
`;

export const SAvatar = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  overflow: hidden;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SProfileName = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 10px;
  height: 35px;
`;

export const SButtonStill = styled(Button)`
  &.ant-btn {
    padding: 0;
    width: 10px;
    color: white;
  }
`;

export const SChangedName = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  gap: 8px;
`;

export const SActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SButtonAction = styled(Button)`
  &.ant-btn {
    border-radius: 99%;
    padding: 0;
    width: 33px;
    height: 33px;
    border-color: transparent;
  }
`;

export const SCloseAction = styled(SButtonAction)`
  &.ant-btn {
    background: #1d1d1d;
    color: white;
  }
`;

export const SApproveAction = styled(SButtonAction)`
  &.ant-btn {
    background: white;
    color: #1d1d1d;
  }
`;

export const SContentPopover = styled.div`
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SPopover = styled(Popover)`
  body:has(&) .ant-popover-inner {
    border: 1px solid #424242;
  }
`;

export const SName = styled.span`
  padding-bottom: 3px;
  height: 21px;
`;

export const SInput = styled(Input)`
  &.ant-input {
    background: transparent;
    border-color: transparent;
    color: white;
    font-size: 16px;
    padding: 0;
  }

  &.ant-input-outlined {
    border-width: 0;
  }
`;
