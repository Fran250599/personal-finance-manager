"use client";
import Image from 'next/image'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import '../../styles/Home.css';


ChartJS.register(ArcElement, Tooltip, Legend);

// Uses doughnut chart to display the user's balance
const data = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      label: "Balance",
      data: [1000, 500],
      backgroundColor: ['rgb(54, 162, 235)',
        'rgb(255, 205, 86)'],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};



export default function Home() {
  return (
    <main>

      <h1>Welcome to your personal finance manager</h1>

      <div className="pieChart">
        <Doughnut data={data} options={options} />
      </div>


    </main>
  )
}
