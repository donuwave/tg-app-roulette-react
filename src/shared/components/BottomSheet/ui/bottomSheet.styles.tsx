import styled from "styled-components";
import { Modal } from "antd";
import { motion } from "framer-motion";
import type { SModalWrapperProps } from "../model/modalProps.types";

export const SModalContent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
`;

export const AnimatedModal = styled(motion.div)`
  width: 100%;
  pointer-events: auto;
`;

export const SModalWrapper = styled(Modal)<SModalWrapperProps>`
  .ant-modal-content {
    height: ${({ $height }) => $height};
    border-radius: 18px 18px 0 0;
    background: #282729;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0;
  }

  .ant-modal-header {
    background: #282729;
    padding: 16px;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-bottom: 0;
  }

  .ant-modal-body {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px 16px 16px;
  }

  .ant-modal-footer {
    padding: 16px;
    background: #282729;
  }
`;

export const SBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
  z-index: 999;
`;
