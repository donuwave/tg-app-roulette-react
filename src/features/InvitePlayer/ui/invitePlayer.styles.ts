import styled from "styled-components";
import { Button } from "antd";

export const SInvitePlayer = styled.div`
  display: grid;
  gap: 8px;
  background: #131313;
  border-radius: 10px;
  padding: 16px 20px;
  cursor: pointer;
  border: 1px solid transparent;
`;

export const STitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const SInvite = styled(Button)`
  &.ant-btn {
    height: 24px;
    font-size: 11px;
    background: #2a2a2a;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.text.main};
  }
`;

export const SPlayers = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const SAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
