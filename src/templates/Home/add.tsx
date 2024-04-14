"use client";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/lib/store";
import { increment, decrement } from "../../app/lib/features/counter/counterSlice";
import { useAppDispatch } from "@/app/lib/hooks";
export const TestRedux = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Remove</button>
      <p>Value: {count}</p>
    </div>
  );
};
