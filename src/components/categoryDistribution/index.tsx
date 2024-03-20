import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../chart/chart";
import "../style/index.css";

const Index = () => {
  const state = useSelector((state: any) => state);
  const [data] = useState(state.category_distribution);

  return (
    <div className="section">
      <h2>Category Distribution</h2>
      <span className="container">
        <Chart
          type="bar"
          x_axis={Object.keys(data)}
          y_axis={Object.values(data)}
          category="category_distribution"
        />
      </span>
    </div>
  );
};

export default Index;
