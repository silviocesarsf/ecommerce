import React from "react";
import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <div className="w-[350px] h-10 bg-white/60 rounded-md overflow-hidden p-2 flex items-center justify-between relative">
      <CiSearch className="absolute" />
      <input
        className="h-full w-full bg-transparent pl-5 font-thin text-xs"
        placeholder="O que está procurando ?"
        type="text"
      />
    </div>
  );
};

export default Input;
