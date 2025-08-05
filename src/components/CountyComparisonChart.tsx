import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { CountyData } from '../data/floridaHealthData';

interface CountyComparisonChartProps {
  data: CountyData[];
  metric: string;
  metricName: string;
}

const CountyComparisonChart: React.FC<CountyComparisonChartProps> = ({ data, metric, metricName }) => {
  const chartData = data
    .map(county => ({
      county: county.county,
      value: county.metrics[metric as keyof typeof county.metrics][2023],
      population: county.population
    }))
    .sort((a, b) => b.value - a.value);

  const formatTooltip = (value: number) => {
    const units = {
      maternalMortality: ' per 100k',
      lowBirthWeight: '%',
      pretermBirth: '%',
      teenBirthRate: ' per 1k'
    };
    return `${value.toFixed(1)}${units[metric as keyof typeof units] || ''}`;
  };

  const getBarColor = (value: number) => {
    // Color coding based on metric severity
    const maxValue = Math.max(...chartData.map(d => d.value));
    const normalizedValue = value / maxValue;
    
    if (normalizedValue > 0.8) return '#DC2626'; // Red for highest
    if (normalizedValue > 0.6) return '#F59E0B'; // Orange for high
    if (normalizedValue > 0.4) return '#10B981'; // Green for medium
    return '#3B82F6'; // Blue for lowest
  };

  const getBarGradient = (value: number) => {
    // Gradient coding based on metric severity
    const maxValue = Math.max(...chartData.map(d => d.value));
    const normalizedValue = value / maxValue;
    
    if (normalizedValue > 0.8) return 'url(#redGradient)';
    if (normalizedValue > 0.6) return 'url(#orangeGradient)';
    if (normalizedValue > 0.4) return 'url(#greenGradient)';
    return 'url(#blueGradient)';
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 80 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" opacity={0.3} />
        <XAxis 
          dataKey="county" 
          angle={-45}
          textAnchor="end"
          height={100}
          interval={0}
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#6B7280', fontSize: 11, fontWeight: 600 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
        />
        <Tooltip 
          formatter={formatTooltip}
          labelFormatter={(label) => `County: ${label}`}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            backdropFilter: 'blur(20px)',
            padding: '12px 16px'
          }}
          cursor={{ fill: 'rgba(0, 102, 204, 0.1)' }}
        />
        <Legend 
          wrapperStyle={{
            paddingTop: '20px',
            fontSize: '12px',
            fontWeight: '600'
          }}
        />
        <Bar 
          dataKey="value" 
          fill="#0066CC"
          radius={[12, 12, 0, 0]}
          name={metricName}
          maxBarSize={80}
        >
          {chartData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={getBarGradient(entry.value)}
              stroke="#ffffff"
              strokeWidth={3}
              strokeOpacity={0.8}
            />
          ))}
        </Bar>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DC2626" stopOpacity={1} />
            <stop offset="100%" stopColor="#B91C1C" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity={1} />
            <stop offset="100%" stopColor="#D97706" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity={1} />
            <stop offset="100%" stopColor="#059669" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0.8} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CountyComparisonChart; 