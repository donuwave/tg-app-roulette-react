import styled from "styled-components";
import { Button } from "antd";

export const SHeaderTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 15px;
  font-weight: 700;
`;

export const SAvatar = styled.div`
  width: 24px;
  height: 24px;
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

export const SFooter = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background: #282729;
  gap: 7px;
  grid-template-columns: 1fr;
`;

export const SClose = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.text.main};
    color: ${({ theme }) => theme.colors.background.primary};
    border-radius: 16px;
    height: 40px;
    font-weight: 700;
  }
`;

export const SNickname = styled.span`
  padding: 0 6px 0 10px;
  color: white;
`;

export const SStatus = styled.span`
  color: #4dd666;
`;

export const SHeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SInfo = styled.div`
  display: flex;
  font-size: 11px;
  align-items: center;
`;

export const SPercent = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  padding-right: 4px;
`;

export const SPrice = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.active.main};
`;

export const SList = styled.div`
  display: grid;
  gap: 8px;
  padding-top: 12px;

  grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
`;
