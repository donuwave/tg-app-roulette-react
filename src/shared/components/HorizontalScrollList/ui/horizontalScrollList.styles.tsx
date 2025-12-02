import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

export const SList = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 6px;
  flex-wrap: nowrap;

  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  position: relative;
`;

export const GradientLeftEdgeOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 54px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent);
  }
`;
