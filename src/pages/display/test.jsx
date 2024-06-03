import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ScatterPlot } from "@mui/x-charts/ScatterChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { DUMMY_DATE, DUMMY_STOCK_VALUE } from "../../mock/dummy_graph";

import { LineChart } from "@mui/x-charts/LineChart";
import emotionStyled from "@emotion/styled";

export default function BasicComposition({ stockId }) {
  const [isResponsive, setIsResponsive] = React.useState(false);

  const Container = isResponsive ? ResponsiveChartContainer : ChartContainer;
  const sizingProps = isResponsive ? {} : { width: 400, height: 300 };

  // console.log(DUMMY_DATE);
  const dateData = DUMMY_DATE;
  const costData = DUMMY_STOCK_VALUE[stockId];

  return (
    <ChartBox>
      <LineChart
        xAxis={[
          {
            data: dateData,
            valueFormatter: (mili, context) => {
              // console.log(mili, context)
              let date = new Date(mili);
              return `${date.getMonth() + 1}.${date.getDate()}`;
            },
          },
        ]}
        series={[
          {
            data: costData,
            showMark: ({ idx }) => false,
          },
        ]}
        width={500}
        height={400}
      />
    </ChartBox>
  );
  // return (
  //   <ChartBox>
  //     <Container
  //       series={[
  //         {
  //           type: "line",
  //           data: [1, 2, 3, 4, 5],
  //         },
  //         {
  //           type: "scatter",
  //           data: [
  //             { x: 1, y: 5 },
  //             { x: 2, y: 4 },
  //             { x: 3, y: 3 },
  //             { x: 4, y: 2 },
  //             { x: 5, y: 1 },
  //           ],
  //         },
  //       ]}
  //       xAxis={[
  //         {
  //           data: [1, 2, 3, 4, 5],
  //           // scaleType: "band",
  //           id: "x-axis-id",
  //         },
  //       ]}
  //       {...sizingProps}
  //       width={500}
  //       height={400}
  //     >
  //       <LinePlot />
  //       <ScatterPlot />

  //       <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" />
  //     </Container>
  //   </ChartBox>
  // );
}

const FULLBOX = emotionStyled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
`;

const ChartBox = emotionStyled.div`
  margin: -30px -40px -30px -40px;
`;
