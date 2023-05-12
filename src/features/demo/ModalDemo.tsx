import React, { ReactNode, useState, useCallback } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: #000;
  cursor: pointer;
`;

type ModalProps = {
  children: ReactNode;
};

type ModalContentProps = ModalProps & {
  onClose: () => void;
};

const ModalContent: React.FC<ModalContentProps> = ({ onClose, children }) => {
  const handleModalClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    },
    []
  );

  return (
    <ModalBackground onClick={onClose}>
      <ModalBody onClick={handleModalClick}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalBody>
    </ModalBackground>
  );
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button onClick={openModal}>Show Modal</button>
      {isOpen && <ModalContent onClose={closeModal}>{children}</ModalContent>}
    </>
  );
};

export default Modal;
