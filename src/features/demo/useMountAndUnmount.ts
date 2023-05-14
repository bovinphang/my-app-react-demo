import { useEffect } from "react";

type MountCallback = () => void;
type UnmountCallback = () => void;

const useMountAndUnmount = (
  onMount?: MountCallback,
  onUnmount?: UnmountCallback
): void => {
  useEffect(() => {
    if (typeof onMount === "function") {
      onMount();
    }
    return () => {
      if (typeof onUnmount === "function") {
        onUnmount();
      }
    };
  }, [onMount, onUnmount]);
};
export default useMountAndUnmount;
