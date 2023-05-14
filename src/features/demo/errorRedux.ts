/* //单一数据源：
import { configureStore, createSlice } from '@reduxjs/toolkit';

// 定义状态类型
interface CounterState {
  count: number;
}

// 创建 Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 } as CounterState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// 创建 Store
const store = configureStore({ reducer: counterSlice.reducer });

// 获取当前状态
console.log(store.getState());

// 发送 Action 更新状态
store.dispatch(counterSlice.actions.increment());
console.log(store.getState());

 */

/* 
//只读状态：
import { configureStore, createSlice } from '@reduxjs/toolkit';

// 定义状态类型
interface CounterState {
  readonly count: number;
}

// 创建 Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 } as CounterState,
  reducers: {
    increment: (state) => {
      // state.count += 1; // Error: Cannot assign to 'count' because it is a read-only property.
      state.count = state.count + 1; // 可以通过重新赋值的方式修改只读属性
    },
    decrement: (state) => {
      // state.count -= 1; // Error: Cannot assign to 'count' because it is a read-only property.
      state.count = state.count - 1;
    },
  },
});

// 创建 Store
const store = configureStore({ reducer: counterSlice.reducer });

// 监听状态变化
store.subscribe(() => {
  console.log(store.getState());
});

// 试图直接修改状态
// store.getState().count = 10; // Error: Cannot assign to 'count' because it is a read-only property.
console.log(store.getState()); // { count: 0 }

// 发送 Action 更新状态
store.dispatch(counterSlice.actions.increment());

 */

// 纯函数：
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 定义状态类型
interface CounterState {
  count: number;
}

// 创建 Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 } as CounterState,
  reducers: {
    increment: (state) => {
      // state.count += 1; // Error: Cannot assign to 'count' because it is a read-only property.
      // 纯函数写法
      return { ...state, count: state.count + 1 };
    },
    decrement: (state) => {
      // state.count -= 1; // Error: Cannot assign to 'count' because it is a read-only property.
      // 纯函数写法
      return { ...state, count: state.count - 1 };
    },
  },
});

// 创建 Store
const store = configureStore({ reducer: counterSlice.reducer });

// 监听状态变化
store.subscribe(() => {
  console.log(store.getState());
});

// 试图直接修改状态
// store.getState().count = 10; // Error: Cannot assign to 'count' because it is a read-only property.
console.log(store.getState()); // { count: 0 }

// 发送 Action 更新状态
store.dispatch(counterSlice.actions.increment());
console.log(store.getState());
store.dispatch(counterSlice.actions.increment());
console.log(store.getState());
