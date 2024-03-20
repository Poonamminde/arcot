import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ type, x_axis, y_axis, category }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  //console.log(data);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: type,
      data: {
        labels: x_axis, //["January","February", "March","April","May", "June","July", ],
        datasets: [
          {
            label: category,
            data: y_axis, //[65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "blue",
            tension: 0.1,
          },
        ],
      },
    });
  });

  return (
    <div style={{ width: "500px" }}>
      <canvas ref={chartRef} style={{ width: "20", height: "10" }} />
    </div>
  );
};

export default LineChart;
