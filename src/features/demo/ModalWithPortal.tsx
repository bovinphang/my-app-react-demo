//使用Portals
//在这个示例中，我们使用Portal将弹出窗口附加到DOM树的body元素上，从而确保即使页面滚动，该弹出窗口也始终可见。
import React, { useState } from "react";
import ReactDOM from "react-dom";

type Props = {
  onClose: () => void;
};

const ModalContent: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="modal">
      <p>This is a portal modal</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen &&
        ReactDOM.createPortal(
          <ModalContent onClose={closeModal} />,
          document.body
          /* document.getElementById("root") as HTMLElement */
        )}
      <button onClick={openModal}>Open Portal Modal</button>
    </div>
  );
};

export default Modal;

//在这个使用Portal的版本中，我们创建了一个ModalContent组件，并将其传递给ReactDOM.createPortal方法。这个方法需要两个参数：要渲染的内容和DOM元素，我们希望它们被附加到哪里。在这个例子中，我们将模态框内容附加到document.body元素上。

//在Modal组件中，我们使用useState钩子来跟踪模态框的状态，并定义了openModal和closeModal回调函数，用于控制模态框的打开和关闭。在render函数中，如果模态框处于打开状态，我们将使用createPortal方法将ModalContent组件呈现为DOM树的body元素的子级。

//请注意，由于ModalContent组件是通过Portal附加到body元素上的，因此即使页面滚动，该弹出窗口也会始终可见。
