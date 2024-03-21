import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../chart/chart";
import "../style/index.css";
/**
 * response time by day and by week
 * @returns 
 */
const Index = () => {
  const state = useSelector((state: any) => state);
  const [type1, setType1] = useState("line");
  const [type2, setType2] = useState("line");
  const [data1] = useState(
    state.response_times.day_wise.map((element: any) => element.date)
  );
  const [data2] = useState(
    state.response_times.day_wise.map((element: any) => element.average_time)
  );
  const [data3] = useState(
    state.response_times.week_wise.map((element: any) => element.week)
  );
  const [data4] = useState(
    state.response_times.week_wise.map((element: any) => element.average_time)
  );

  return (
    <div>
      <h2>Response Times</h2>
      <span className="container">
        <div>
          <select onChange={(e) => setType1(e.target.value)}>
            <option value="line">select option</option>
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
            category="response_time_day_wise"
          />
        </div>
        <div>
          <select onChange={(e) => setType2(e.target.value)}>
            <option value="line">select option</option>
            <option value="bar">bar</option>
            <option value="scatter">scatter</option>
            <option value="line">line</option>
            <option value="pie">pie</option>
            <option value="radar">radar</option>
            <option value="doughnut">doughnut</option>
          </select>
          <Chart
            type={type2}
            x_axis={data3}
            y_axis={data4}
            category="response_time_week_wise"
          />
        </div>
      </span>
    </div>
  );
};

export default Index;
