"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import Image from "next/image";
import Toggle from "../ui/Toggle";

function List() {
  const [data, setData] = useState([]);
  const extentionsList = data.map((ext, index) => (
    <li
      key={index}
      className="rounded-lg bg-white cursor-pointer transition hover:hover-effect dark:bg-Neutral-800 p-6 flex flex-col justify-between"
    >
      <div className="flex items-start gap-4">
        <Image
          src={`${ext.logo.split("public")[1]}`}
          alt={ext.name}
          width={60}
          height={60}
        />
        <div>
          <h5>{ext.name}</h5>
          <p>{ext.description}</p>
        </div>
      </div>
      <div className="mt-8 flex-between">
        <button className="simple-btn">Remove</button>
        <Toggle isActive={ext.isActive} />
      </div>
    </li>
  ));
  return (
    <>
      <Filter setData={setData} />
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mb-8">
        {extentionsList}
      </ul>
    </>
  );
}

export default List;
