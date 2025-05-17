import Header from "@/components/header/Header";
import Filter from "@/components/list/Filter";
import List from "@/components/list/List";
import React from "react";

function page() {
  return (
    <div className="container">
      <Header />
      <List />
    </div>
  );
}

export default page;
