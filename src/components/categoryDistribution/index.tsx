import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../chart/chart";
import { useDispatch } from "react-redux";
import "../style/index.css";
/**
 * category distribution chart
 */

function Index() {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const state = useSelector((state: any) => state);
  const [newData] = useState({ name: "", val: 0 });
  const [type, setType] = useState("bar");
  //console.log(state);
  const [data] = useState(state.category_distribution);
  const handleChange = (e: any) => {
    setType(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    data[`${newData.name}`] = newData.val;
    console.log(data);
    dispatch({
      type: "load",
      data: { ...state, category_distribution: data },
    });
    setEdit(false);
  };
  return (
    <div className="section">
      <h2>Category Distribution</h2>
      <span className="container">
        <div>
          <select onChange={(e) => handleChange(e)}>
            <option value="bar">select option</option>
            <option value="bar">bar</option>
            <option value="line">line</option>
            <option value="pie">pie</option>
            <option value="radar">radar</option>
            <option value="doughnut">doughnut</option>
          </select>
          <Chart
            type={type}
            x_axis={Object.keys(data)}
            y_axis={Object.values(data)}
            category="category_distribution"
          />
          {edit ? (
            <form>
              <label>Category Distribution Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  newData.name = e.target.value;
                }}
                required
              ></input>
              <label>Category Distribution Value:</label>
              <input
                type="number"
                onChange={(e) => {
                  newData.val = Number(e.target.value);
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
}

export default Index;
