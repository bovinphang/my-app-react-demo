import styled from "styled-components";
export const ModalBackground = styled.div`
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

export const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: #000;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 16px;
  button {
    margin-right: 20px; /* 设置 Item 间距 */
    &:last-child {
      margin-right: 0; /* 去除最后一个 Item 的右侧间距 */
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  text-align: left;
`;
