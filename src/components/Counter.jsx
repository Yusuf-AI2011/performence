import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter((prev) => prev + 1);
  };

  const dec = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="w-[300px] h-[200px] flex justify-center items-center gap-[20px] flex-col border-2 rounded-[6px]">
      <h1 className="text-[40px]">{counter}</h1>
      <div className="flex justify-center items-center gap-[10px]">
        <button
          className="w-[70px] h-[30px] border-2 rounded-[6px]"
          onClick={inc}
        >
          Plus +
        </button>
        <button
          className="w-[70px] h-[30px] border-2 rounded-[6px]"
          onClick={dec}
        >
          Minus -
        </button>
        <button
          className="w-[70px] h-[30px] border-2 rounded-[6px]"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
