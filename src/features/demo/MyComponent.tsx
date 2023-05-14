import React, { useState } from "react";
import useMountAndUnmount from "./useMountAndUnmount";

const MyComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleMount = (): void => console.log("Component mounted");
  const handleUnmount = (): void => console.log("Component unmounted");

  useMountAndUnmount(handleMount, handleUnmount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
};

export default MyComponent;
