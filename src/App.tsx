import React from "react";
import "./App.css";
import data from "./api/ai-data.json";
import { useDispatch } from "react-redux";
import CategoryDistribution from "./components/categoryDistribution";
import ResponseTime from "./components/responseTime";
import UserSatisfaction from "./components/userSatisfaction";
import UsageStatics from "./components/usageStatistic";

function App() {
  const dispatch = useDispatch();
  const addData = () => {
    console.log("add data");
    dispatch({ type: "load", data });
    //console.log(data);
  };

  addData();
  return (
    <div className="App">
      <CategoryDistribution />
      <ResponseTime />
      <UserSatisfaction />
      <UsageStatics />
    </div>
  );
}

export default App;
