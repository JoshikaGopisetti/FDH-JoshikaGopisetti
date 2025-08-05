import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';
import { CountyData } from '../data/floridaHealthData';

interface TrendChartProps {
  countyData: CountyData;
  metric: string;
  metricName: string;
}

const TrendChart: React.FC<TrendChartProps> = ({ countyData, metric, metricName }) => {
  const data = [
    {
      year: '2021',
      value: countyData.metrics[metric as keyof typeof countyData.metrics][2021],
    },
    {
      year: '2022',
      value: countyData.metrics[metric as keyof typeof countyData.metrics][2022],
    },
    {
      year: '2023',
      value: countyData.metrics[metric as keyof typeof countyData.metrics][2023],
    },
  ];

  const formatTooltip = (value: number) => {
    const units = {
      maternalMortality: ' per 100k',
      lowBirthWeight: '%',
      pretermBirth: '%',
      teenBirthRate: ' per 1k'
    };
    return `${value.toFixed(1)}${units[metric as keyof typeof units] || ''}`;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0066CC" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#0066CC" stopOpacity={0.05}/>
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0066CC" />
            <stop offset="100%" stopColor="#00A651" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" opacity={0.3} />
        <XAxis 
          dataKey="year" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 600 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
        />
        <Tooltip 
          formatter={formatTooltip}
          labelFormatter={(label) => `Year: ${label}`}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            backdropFilter: 'blur(20px)',
            padding: '12px 16px'
          }}
          cursor={{ stroke: '#0066CC', strokeWidth: 2, strokeDasharray: '5 5' }}
        />
        <Legend 
          wrapperStyle={{
            paddingTop: '20px',
            fontSize: '12px',
            fontWeight: '600'
          }}
        />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="url(#lineGradient)"
          strokeWidth={4}
          fill="url(#areaGradient)"
          name={metricName}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="url(#lineGradient)"
          strokeWidth={4}
          dot={{ 
            fill: '#0066CC', 
            strokeWidth: 4, 
            r: 10,
            stroke: '#ffffff',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))'
          }}
          activeDot={{ 
            r: 14,
            stroke: '#ffffff',
            strokeWidth: 4,
            fill: '#0066CC',
            filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.25))'
          }}
          name={metricName}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TrendChart; 