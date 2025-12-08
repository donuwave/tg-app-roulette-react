import styled from "styled-components";
import { Link } from "react-router-dom";
import { Popover } from "antd";

export const SMenu = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  border-left: 1px solid ${({ theme }) => theme.colors.border.main};
  border-right: 1px solid ${({ theme }) => theme.colors.border.main};
  border-top: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: 12px 12px 0 0;
  z-index: 1000;

  position: fixed;
  background: ${({ theme }) => theme.colors.background.additional};
  bottom: 0;
  left: 0;
  padding: 10px 0;
  width: 100%;
`;

export const SMenuItemLink = styled(Link)<{ $selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${({ theme, $selected }) => ($selected ? "white" : theme.colors.text.secondary)};
`;

export const SMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

export const SPopover = styled(Popover)`
  body:has(&) {
    & .ant-popover .ant-popover-inner {
      background: #2e2e2e;
    }

    & .ant-popover-arrow::after {
      background: #2e2e2e;
    }
  }
`;

export const SContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SModePvp = styled(Link)`
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding-right: 10px;
  }
  &:not(:first-child) {
    padding-left: 10px;
  }
`;

export const SAvatar = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
