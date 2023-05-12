//未使用Portals
//在这个示例中，我们将创建一个简单的弹出窗口，当用户单击按钮时会打开此窗口。但是，这个弹出窗口将附加到DOM树中的父组件中，因此如果页面滚动，则弹出窗口也会随之滚动。
import React, { ReactNode, useState, useCallback } from "react";
import {
  ModalBackground,
  ModalBody,
  CloseButton,
  ButtonContainer,
  Title,
} from "./Modal.styles";

type ModalProps = {
  title?: string;
  open: boolean;
  onOk?: () => void | undefined;
  onCancel?: () => void | undefined;
  children?: ReactNode;
};

type ModalContentProps = Omit<ModalProps, "open" | "onCancel"> & {
  onCancel: () => void;
};

const ModalContent: React.FC<ModalContentProps> = ({
  title,
  onOk,
  onCancel,
  children,
}) => {
  const handleModalClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    },
    []
  );

  return (
    <ModalBackground onClick={onCancel}>
      <ModalBody onClick={handleModalClick}>
        <CloseButton onClick={onCancel}>&times;</CloseButton>
        {title && <Title>{title}</Title>}
        {children}
        <ButtonContainer>
          <button onClick={onOk}>确定</button>
          <button onClick={onCancel}>取消</button>
        </ButtonContainer>
      </ModalBody>
    </ModalBackground>
  );
};

const Modal: React.FC<ModalProps> = ({
  title,
  open,
  onOk,
  onCancel,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const handleOnOk = useCallback(() => {
    setIsOpen(false);
    onOk?.();
  }, []);

  const handleOnCancel = useCallback(() => {
    setIsOpen(false);
    onCancel?.();
  }, []);

  return (
    <>
      {isOpen && (
        <ModalContent title={title} onOk={handleOnOk} onCancel={handleOnCancel}>
          {children}
        </ModalContent>
      )}
    </>
  );
};

export default Modal;

//在这个未使用Portals的版本中，我们创建了一个Modal组件，并使用useState钩子来跟踪它是否处于打开状态。我们还定义了两个回调函数：openModal和closeModal，用于控制模态框的打开和关闭。

//在render函数中，如果模态框处于打开状态，我们将呈现一个包含“ This is a modal”文本和关闭按钮的<div>元素。请注意，这个<div>元素是直接附加到DOM树中的父组件中。
