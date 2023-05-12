import React, { useState, useEffect } from "react";

interface Props {
  name: string;
  counter: number;
}

export const Parent = () => {
  const [counter, setCounter] = useState(0);

  return <Child name="Jack" counter={counter} />;
};

const Child = (props: Props) => {
  const [count, setCount] = useState(0);

  const newProps = { ...props, name: "Mike", counter: props.counter + count };

  return (
    <div>
      <p>Name: {newProps.name}</p>
      <p>Counter: {newProps.counter}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Child;
