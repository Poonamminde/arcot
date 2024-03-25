import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "../style/index.css";

interface chartInterface {
  type: any;
  x_axis: any;
  y_axis: any;
  category: string;
}
/**
 * display chart according to type provided by argument
 * @param {*} param0
 * @returns
 */
const LineChart: React.FC<chartInterface> = ({
  type,
  x_axis,
  y_axis,
  category,
}) => {
  const chartRef: any = useRef(null);
  const chartInstance: any = useRef(null);
  //console.log(data);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type,
      data: {
        labels: x_axis, //["January","February", "March","April","May", "June","July", ],
        datasets: [
          {
            label: category,
            data: y_axis, //[65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#007cb9",
            backgroundColor: [
              "#ffb677",
              "#f4aeba",
              "#a2a8d3",
              "#ffe9e3",
              "#97cba9",
            ],
            borderWidth: 2,
            tension: 0.1,
          },
        ],
      },
    });
  });

  return (
    <div className="chart-container">
      <canvas ref={chartRef} style={{ width: "20", height: "10" }} />
    </div>
  );
};

export default LineChart;
