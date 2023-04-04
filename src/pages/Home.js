import React from "react";
import "./pages.css";
import gif from "../world.gif";

const Home = () => {
  return (
    <div>
      <h1>Around the World with Heather, Sharmila & Gillian </h1>
      <img src={gif} alt="" style={{ height: "700px", width: "950px" }} />
    </div>
  );
};

export default Home;
