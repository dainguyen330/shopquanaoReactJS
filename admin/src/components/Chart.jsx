import React from "react";
import styled, { css } from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
`;
const ChartTitle = styled.h3``;

const Chart = ({title,data,dataKey, grid}) => {
  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey={dataKey}stroke="#5550bd" />
          <Tooltip /> {/*hover*/}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
