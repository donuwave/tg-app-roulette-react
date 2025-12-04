import type { ModalProps } from "antd";
import type { ReactNode } from "react";

export interface IModalProps extends Omit<ModalProps, "onClose"> {
  header: ReactNode;
  onClose: () => void;
  height?: string | number;
}

export interface SModalWrapperProps {
  $height: number | string;
}
