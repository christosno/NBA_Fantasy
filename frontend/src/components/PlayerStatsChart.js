import React from "react";
import { Line } from "react-chartjs-2";

const PlayerStatsChart = ({ matches }) => {
  //   // ******** need to fix two iteretions in one ********
  //   const points = matches.slice(-15).map((match) => match.pts);
  //   const dates = matches
  //     .slice(-15)
  //     .map((match) => match.game.date.split("T")[0]);
  //   // ***************************************************

  const points = [];
  const dates = [];
  const fg_pct = [];

  matches.slice(-15).forEach((match) => {
    points.push(match.pts);
    dates.push(match.game.date.split("T")[0]);
    fg_pct.push(match.fg_pct);
  });
  return (
    <div>
      <Line
        height={200}
        width={500}
        data={{
          labels: dates,
          datasets: [
            {
              label: "Pts",
              data: points,
              backgroundColor: "rgba(255, 99, 132, 0.2)",

              borderColor: "rgba(255, 99, 132, 1)",

              borderWidth: 1,
            },
            {
              label: "Fg %",
              data: fg_pct,
              backgroundColor: "rgba(75, 192, 192, 0.2)",

              borderColor: "rgba(75, 192, 192, 0.2)",

              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default PlayerStatsChart;
