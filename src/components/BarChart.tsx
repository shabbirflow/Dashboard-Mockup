// import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = [20, 25, 30, 35, 40, 45, 50];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total interest",
        backgroundColor: "#3468C0",
        borderColor: "#86A7FC",
        data: [22, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Set to false to make the chart responsive
    responsive: true,
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
