import React, { useEffect } from "react";
import Portal from "./Portal";
import { Dialog, Overlay } from "./styles";

interface IProps {
  onClose: Function;
  open: boolean;
  children: React.ReactNode;
}

const Modal = ({ children, open, onClose }: IProps) => {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);
  if (!open) return null;
  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e: Event) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={(e) => onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;
