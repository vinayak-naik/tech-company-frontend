import React from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/redux-toolkit/counterSlice";

const Counter = () => {
  const { counterValue } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(5))}
        >
          IncrementBy-5
        </button>
        <br />
        <span>{counterValue}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(2))}
        >
          DecrementBy-2
        </button>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(25))}
        >
          incrementBy-25
        </button>
      </div>
    </div>
  );
};
export default Counter;
