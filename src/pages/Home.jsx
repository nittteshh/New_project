import React from "react";
import Layout from "../components/Button/layout/Layout";
import Card from "./blog/components/Card";

const Home = () => {
  return (
    <>
      <Layout />
      <div className="flex justify-center flex-wrap space-x-8 mt-4 mb-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
