import styled from "styled-components";
import { Button, Segmented } from "antd";

export const SGamePvpPage = styled.div`
  padding-top: 10px;
`;

export const SGamePvpHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 112px 1fr;
  padding-bottom: 14px;
`;

export const SSettings = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  justify-items: center;
  align-items: center;
`;

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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const SButton = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.background.primary};
    border-color: #666666;
    border-radius: 99%;
  }
`;

export const SHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const SButtonSecondary = styled(Button)`
  &.ant-btn {
    background: #ffffff;
    border-color: #666666;
    border-radius: 99%;

    &&:hover {
      background: #ffffff;
    }
  }
`;

export const SActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const SAddPvp = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.active.main};
    border-color: #666666;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;

    &&:hover {
      background: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.active.main};
    }
  }
`;

export const SAddWallet = styled(Button)`
  &.ant-btn {
    background: ${({ theme }) => theme.colors.text.main};
    border-color: #666666;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;

    &&:hover {
      background: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.main};
    }
  }
`;
