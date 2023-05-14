import React from "react";
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import { Parent } from "./features/demo/PropsBadCode";
//import CounterWrap from "./features/demo/MemoAndUseMemoAndUseCallback";
//import Modal from "./features/demo/Modal";
import Modal from "./features/demo/ModalWithPortal";
import MyComponent from "./features/demo/MyComponent";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ height: "1000px", overflowY: "auto" }}>
      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      {/* <Parent /> */}
      {/* <CounterWrap /> */}
      <Modal title="Hello" open={true}>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
        <p>abc</p>
      </Modal>
    </div>
  );
}

export default App;
