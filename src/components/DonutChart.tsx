import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ label, green }: { label: string; green: number }) => {
  const data = {
    labels: [label],
    datasets: [
      {
        data: [green, 100 - green], // Assuming the percentage is 68%
        backgroundColor: ["#4CAF50", "#F2F1EB"], // Background color and color for the remaining percentage
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "83%",
    maintainAspectRatio: false,
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: `${data.datasets[0].data[0]}%`,
            font: {
              size: "1.5em",
              weight: "bold",
            },
            display: false, // Set display property to false to hide the label
          },
        ],
      },
    },
    rotation: Math.PI / 2,
    legend: {
      display: false,
    },
  };

  // return (
  //   <div
  //     className="radial-progress bg-transparent text-green-700"
  //     //@ts-ignore
  //     style={{ "--value": green }}
  //     role="progressbar"
  //   >
  //     {green}%
  //   </div>
  // );

  //@ts-ignore
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
