//优化后
import React, { memo, useState, useCallback, useMemo } from "react";

type Props = {
  initialCount: number;
};

const Counter: React.FC<Props> = memo(({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
});

const CounterWrap: React.FC = () => {
  return (
    <div>
      <Counter initialCount={0} />
    </div>
  );
};
export default CounterWrap;
