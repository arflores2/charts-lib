import React, { PureComponent } from 'react';


import {
  BarChart as RechartsBarChartComponent,
  Bar as RechartsBarComponent,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LegendPayload
} from 'recharts';

interface RechartsBarChartProps {
  data: ReadonlyArray<object>
}

export class RechartsBarChart extends PureComponent<RechartsBarChartProps> {
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
