import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { CountyData } from '../data/floridaHealthData';

interface DemographicsChartProps {
  countyData: CountyData;
  metric: string;
}

const DemographicsChart: React.FC<DemographicsChartProps> = ({ countyData, metric }) => {
  const data = Object.entries(countyData.demographics).map(([race, values]) => ({
    race,
    value: values[metric as keyof typeof values],
  }));

  const formatTooltip = (value: number) => {
    const units = {
      maternalMortality: ' per 100k',
      lowBirthWeight: '%',
      pretermBirth: '%',
      teenBirthRate: ' per 1k'
    };
    return `${value.toFixed(1)}${units[metric as keyof typeof units] || ''}`;
  };

  const getBarColor = (race: string) => {
    const colors = {
      'White NH': '#3B82F6',
      'Black NH': '#EF4444',
      'Hispanic': '#10B981',
      'Asian/PI': '#8B5CF6',
      'Other': '#F59E0B'
    };
    return colors[race as keyof typeof colors] || '#6B7280';
  };

  const getBarGradient = (race: string) => {
    const gradients = {
      'White NH': 'url(#whiteGradient)',
      'Black NH': 'url(#blackGradient)',
      'Hispanic': 'url(#hispanicGradient)',
      'Asian/PI': 'url(#asianGradient)',
      'Other': 'url(#otherGradient)'
    };
    return gradients[race as keyof typeof gradients] || '#6B7280';
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 80 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" opacity={0.3} />
        <XAxis 
          dataKey="race" 
          angle={-45}
          textAnchor="end"
          height={80}
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
          labelFormatter={(label) => `Race/Ethnicity: ${label}`}
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
          name="Health Metric"
          maxBarSize={80}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={getBarGradient(entry.race)}
              stroke="#ffffff"
              strokeWidth={3}
              strokeOpacity={0.8}
            />
          ))}
        </Bar>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="whiteGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="blackGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EF4444" stopOpacity={1} />
            <stop offset="100%" stopColor="#DC2626" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="hispanicGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity={1} />
            <stop offset="100%" stopColor="#059669" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="asianGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity={1} />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="otherGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity={1} />
            <stop offset="100%" stopColor="#D97706" stopOpacity={0.8} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DemographicsChart; 