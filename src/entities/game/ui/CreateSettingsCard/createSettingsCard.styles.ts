import styled from "styled-components";
import { Button, Slider } from "antd";

export const SCard = styled.div`
  display: grid;
  gap: 8px;
  background: #131313;
  border-radius: 10px;
  padding: 16px 20px;
  cursor: pointer;
  border: 1px solid transparent;
`;

export const SSlider = styled(Slider)`
  &.ant-slider .ant-slider-handle::after {
    background: ${({ theme }) => theme.colors.active.main};
    box-shadow: none;
  }

  & .ant-slider-rail:hover {
    background: #0d4245;
  }

  &.ant-slider {
    margin: 0;
  }
`;

export const STitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  text-align: center;
  font-weight: 700;
`;

export const SCounter = styled.div`
  width: 80px;
  background: #2a2a2a;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    height: 20px;
    width: 20px;
    background: #3f3f3f;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.text.main};
    padding: 0;

    & > span {
      height: 19px;
    }
  }
`;

export const SCount = styled.div`
  font-size: 14px;
  align-self: center;
  justify-self: center;
`;
