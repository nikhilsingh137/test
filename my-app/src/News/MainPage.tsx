import React from "react";
import LeftAside from "./LeftAside";
import Feed from "./Feed";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <LeftAside />
      <Feed />
    </div>
  );
};

export default MainPage;
