import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type HeaderPortalProps = {
  children: ReactNode;
};

export const HeaderPortal = ({ children }: HeaderPortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("header-actions");
    setContainer(el);
  }, []);

  if (!container) return null;

  return createPortal(children, container);
};
