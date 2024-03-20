import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../chart/chart";
import "../style/index.css";

const Index = () => {
  const state = useSelector((state: any) => state);
  const [data1] = useState(Object.keys(state.usage_statistics.by_platform));
  const [data2] = useState(Object.values(state.usage_statistics.by_platform));
  const [data3] = useState(Object.keys(state.usage_statistics.by_country));
  const [data4] = useState(Object.values(state.usage_statistics.by_country));

  return (
    <div>
      <h2>Usage Statistics</h2>
      <span className="container">
        <Chart
          type="pie"
          x_axis={data1}
          y_axis={data2}
          category="usage_statistics_by_platform"
        />
        <Chart
          type="pie"
          x_axis={data3}
          y_axis={data4}
          category="usage_statistics_by_country"
        />
      </span>
    </div>
  );
};

export default Index;
