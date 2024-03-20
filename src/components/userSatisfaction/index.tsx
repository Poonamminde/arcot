import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../chart/chart";
import "../style/index.css";

const Index = () => {
  const state: any = useSelector((state) => state);
  const [data1] = useState(
    state.user_satisfaction.ratings.map((element: any) => element.rating)
  );
  const [data2] = useState(
    state.user_satisfaction.ratings.map((element: any) => element.count)
  );

  return (
    <div>
      <h2>User Satisfaction</h2>
      <span className="container">
        <Chart
          type="scatter"
          x_axis={data1}
          y_axis={data2}
          category="user_satisfaction"
        />
      </span>
    </div>
  );
};

export default Index;
