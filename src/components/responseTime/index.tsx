import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../chart/chart";
import "../style/index.css";

const Index = () => {
  const state = useSelector((state: any) => state);
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
        <Chart
          type="line"
          x_axis={data1}
          y_axis={data2}
          category="response_time_day_wise"
        />
        <Chart
          type="line"
          x_axis={data3}
          y_axis={data4}
          category="response_time_week_wise"
        />
      </span>
    </div>
  );
};

export default Index;
