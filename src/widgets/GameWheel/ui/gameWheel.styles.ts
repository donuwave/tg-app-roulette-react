import styled from "styled-components";

export const WheelWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: 50px auto;
`;

export const SWheelWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const WheelContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 4s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
`;

export const WheelSvg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Avatar = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;
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

export const Pointer = styled.div`
  width: 0;
  height: 0;
  z-index: 1;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 28px solid white;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
`;

export const CenterCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: black;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  font-weight: bold;

  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }
`;
