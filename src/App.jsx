import React, { memo } from "react";
import Counter from "./components/Counter";
import GetUsers from "./components/GetUsers";

const App = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start py-[250px] bg-gray-900 text-white">
      <Counter />
      <GetUsers />
    </div>
  );
};

export default memo(App);
