import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../chart/chart";
import "../style/index.css";
/**
 * user satisfaction chart
 * @returns
 */
const Index = () => {
  const dispatch = useDispatch();
  const state: any = useSelector((state) => state);
  const [edit, setEdit] = useState(false);
  const [newData] = useState({ rating: 0, count: 0 });
  const [type, setType] = useState("scatter");
  console.log(state);
  const [data1, setData1] = useState(
    state.user_satisfaction.ratings.map((element: any) => element.rating)
  );
  const [data2, setData2] = useState(
    state.user_satisfaction.ratings.map((element: any) => element.count)
  );
  const handleChange = (e: any) => {
    setType(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    state.user_satisfaction.ratings.push({
      rating: newData.rating,
      count: newData.count,
    });
    dispatch({
      type: "load",
      data: { ...state },
    });
    setData1(
      state.user_satisfaction.ratings.map((element: any) => element.rating)
    );
    setData2(
      state.user_satisfaction.ratings.map((element: any) => element.count)
    );
    setEdit(false);
  };
  return (
    <div>
      <h2>User Satisfaction</h2>
      <span className="container">
        <div>
          <select onChange={(e) => handleChange(e)}>
            <option value="scatter">select option</option>
            <option value="bar">bar</option>
            <option value="scatter">scatter</option>
            <option value="line">line</option>
            <option value="pie">pie</option>
            <option value="radar">radar</option>
            <option value="doughnut">doughnut</option>
          </select>
          <Chart
            type={type}
            x_axis={data1}
            y_axis={data2}
            category="user_satisfaction"
          />
          {edit ? (
            <form>
              <label>Rating:</label>
              <input
                type="number"
                onChange={(e) => {
                  newData.rating = Number(e.target.value);
                }}
                required
              ></input>
              <label>Count:</label>
              <input
                type="number"
                onChange={(e) => {
                  newData.count = Number(e.target.value);
                }}
                required
              />
              <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
          ) : (
            <h3 onClick={() => setEdit(true)}>Edit</h3>
          )}
        </div>
      </span>
    </div>
  );
};

export default Index;
