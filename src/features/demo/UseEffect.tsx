import React, { useState, useEffect } from "react";

type Props = {
  initialCount: number;
};

const Counter: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  // useEffect 模拟 componentDidMount 和 componentDidUpdate 生命周期函数
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  // useEffect 模拟 componentWillUnmount 生命周期
  useEffect(() => {
    return () => {
      console.log("component will unmount");
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
