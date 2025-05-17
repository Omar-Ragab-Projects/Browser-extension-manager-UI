import React, { useEffect, useState } from "react";
import data from "@/lib/data.json";

function Filter({ setData }) {
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    if (filter == "all") {
      setData(data);
    } else if (filter == "active") {
      setData(data.filter((ext) => ext.isActive));
    } else if (filter == "inactive") {
      setData(data.filter((ext) => !ext.isActive));
    }
  }, [filter]);
  return (
    <div className="flex-between mb-8">
      <h3>Extentions List</h3>
      <div className="flex gap-3">
        <button
          onClick={() => setFilter("all")}
          className={filter == "all" ? "active" : undefined}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter == "active" ? "active" : undefined}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("inactive")}
          className={filter == "inactive" ? "active" : undefined}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}

export default Filter;
