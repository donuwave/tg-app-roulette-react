import { type FC, useEffect, useState } from "react";
import { SModalWrapper, SModalContent, AnimatedModal, SBackdrop } from "./bottomSheet.styles.tsx";
import { CloseIcon } from "@shared/assets";
import type { IModalProps } from "../model/modalProps.types.ts";

export const BottomSheet: FC<IModalProps> = ({
  header,
  footer,
  children,
  onClose,
  open,
  height = "70dvh",
  ...props
}) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 250);
    }
  }, [open]);

  if (!visible) return null;

  return (
    <>
      <SBackdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      <SModalWrapper
        open={visible}
        footer={footer}
        title={header}
        closeIcon={<CloseIcon />}
        centered={false}
        maskClosable
        transitionName=""
        maskTransitionName=""
        onCancel={onClose}
        $height={height}
        {...props}
        modalRender={(node) => (
          <SModalContent>
            <AnimatedModal
              initial={{ y: "100%" }}
              animate={{ y: open ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
            >
              {node}
            </AnimatedModal>
          </SModalContent>
        )}
      >
        {children}
      </SModalWrapper>
    </>
  );
};
