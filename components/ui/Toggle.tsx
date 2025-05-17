"use client";
import React, { useState } from "react";

function Toggle({ isActive }: { isActive: boolean }) {
  const [checked, setChecked] = useState(isActive);
  return (
    <div
      onClick={() => setChecked((c) => !c)}
      className={`relative w-12 h-6 rounded-xl duration-300 ${
        checked ? "bg-Red-500" : "bg-gray-500"
      }`}
    >
      <span
        className={`absolute top-1 w-4 h-4 rounded-full duration-300 ${
          checked ? "bg-white translate-x-7" : "bg-white translate-x-1"
        }`}
      ></span>
    </div>
  );
}

export default Toggle;
