import React from 'react';

import {
  BarChart,
  ChartDataShape, 
  GridlineSeries,
  Gridline,
  BarSeries,
  Bar
} from 'reaviz';


interface ReavizBarChartProps {
  data: ChartDataShape[]
}

export const ReavizBarChart = (props: ReavizBarChartProps) => (
  <BarChart
    height={500}
    width={350}
    series={
      <BarSeries
        colorScheme={'#5843d1'}
        animated={false}
        tooltip={null}
        bar={
          <Bar 
            rounded={true}
            width={29}
            padding={5}
            rx={4}
            ry={4}
            // style={(data: ChartDataShape) => {
            //   return { fill: '#5843d1'}
            // }}
          />
        }
      />
    }
    gridlines={<GridlineSeries line={<Gridline direction="y" strokeDasharray='0' />} />}
    data={props.data}
  />
);