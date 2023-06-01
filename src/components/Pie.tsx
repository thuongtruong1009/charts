import { ChartData } from "chart.js";
import React from "react";
import { Line, Pie } from "react-chartjs-2";

const data: ChartData<any> = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const PieChart: React.FC = () => (
  <div>
    <h2>4. Pie Example</h2>
    <Pie data={data} width={400} height={400} />
  </div>
);

export default PieChart;
