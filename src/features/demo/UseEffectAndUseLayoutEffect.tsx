import React, { useState, useEffect, useLayoutEffect } from "react";

type Props = {
  initialCount: number;
};

const Counter: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("A");
    if (count < 1) {
      setCount(count + 1);
    }
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("B");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("C");
  }, [count]);

  useLayoutEffect(() => {
    return () => {
      console.log("D");
    };
  }, []);

  return <div>Counter: {count}</div>;
};

const CounterWrap: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  return <div>{isVisible && <Counter initialCount={0} />}</div>;
};
export default CounterWrap;
