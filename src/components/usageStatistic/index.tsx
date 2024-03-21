import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../chart/chart";
import "../style/index.css";
/**
 * usage statistics by platform and country
 * @returns
 */
const Index = () => {
  const state = useSelector((state: any) => state);
  const [type1, setType1] = useState("pie");
  const [type2, setType2] = useState("pie");
  const [data1] = useState(Object.keys(state.usage_statistics.by_platform));
  const [data2] = useState(Object.values(state.usage_statistics.by_platform));
  const [data3] = useState(Object.keys(state.usage_statistics.by_country));
  const [data4] = useState(Object.values(state.usage_statistics.by_country));

  return (
    <div>
      <h2>Usage Statistics</h2>
      <span className="container">
        <div>
          <select onChange={(e) => setType1(e.target.value)}>
            <option value="pie">select option</option>
            <option value="bar">bar</option>
            <option value="line">line</option>
            <option value="pie">pie</option>
            <option value="radar">radar</option>
            <option value="doughnut">doughnut</option>
          </select>
          <Chart
            type={type1}
            x_axis={data1}
            y_axis={data2}
            category="usage_statistics_by_platform"
          />
        </div>
        <div>
          <select onChange={(e) => setType2(e.target.value)}>
            <option value="pie">select option</option>
            <option value="bar">bar</option>
            <option value="line">line</option>
            <option value="pie">pie</option>
            <option value="radar">radar</option>
            <option value="doughnut">doughnut</option>
          </select>
          <Chart
            type={type2}
            x_axis={data3}
            y_axis={data4}
            category="usage_statistics_by_country"
          />
        </div>
      </span>
    </div>
  );
};

export default Index;
