import React, { PureComponent } from 'react';

import { BarItemProps, ResponsiveBar } from '@nivo/bar';

import {
  BarChart,
  ChartDataShape, 
  GridlineSeries,
  Gridline,
  BarSeries,
  Bar
} from 'reaviz';

import { Theme } from '@nivo/core';

import {
  BarChart as RechartsBarChartComponent,
  Bar as RechartsBarComponent,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LegendPayload
} from 'recharts';

const colorMap: Record<string, string> = {
  'hot dog': 'rgb(87, 66, 208)',
};

const theme: Theme = {
  axis: {
    ticks: {
      line: { 
        strokeWidth: 0
      }
    }
  }
};

const BarItem = (props: BarItemProps) => {
  const {
    x,
    y,
    width,
    height,
    color,
    borderRadius
  } = props;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width} height={height} rx={borderRadius} ry={borderRadius} fill={color} stroke-width="0" stroke="rgb(49, 37, 118)" />
    </g>
  );
}

interface NivoBarChartProps {
  data: object[]
}
export const NivoBarChart = ({ data }: NivoBarChartProps) => (

    <ResponsiveBar
        enableLabel={false}
        theme={theme}
        data={data}
        keys={[ 'hot dog' ]}
        indexBy="country"
        borderRadius={4}
        barComponent={BarItem}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={(bar): string => {
          return colorMap[bar.id];
        }}
        groupMode='grouped'
        defs={[
            {
              id: 'round-corner',
              type: 'clipPath'
            },
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
);




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



interface RechartsBarChartProps {
  data: ReadonlyArray<object>
}

export class RechartsBarChart extends PureComponent<RechartsBarChartProps> {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    const { data } = this.props;

    return (
      <RechartsBarChartComponent
        width={375}
        height={500}
        data={data}
        barCategoryGap={'15%'}
      >
        <CartesianGrid vertical={false} />
        <XAxis axisLine={false} dataKey="name" />
        <YAxis axisLine={false} />
        <Legend formatter={(value: LegendPayload) => <span>{value}</span>} />
        <RechartsBarComponent
          dataKey="hot dogs"
          fill="rgb(87, 66, 208)"
          isAnimationActive={false}
          isUpdateAnimationActive={false}
          radius={[5, 5, 0, 0]}
        />
      </RechartsBarChartComponent>
    );
  }
}
