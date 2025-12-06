import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SList = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  height: 100%;
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
