import React, { useState, useMemo } from 'react';
import { CountyData } from '../data/floridaHealthData';
import { ArrowUpDown, ArrowUp, ArrowDown, Users, Heart, Baby, AlertTriangle } from 'lucide-react';

interface DataTableProps {
  data: CountyData[];
  selectedMetric: string;
}

const DataTable: React.FC<DataTableProps> = ({ data, selectedMetric }) => {
  const [sortField, setSortField] = useState<string>('county');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      let aValue: any, bValue: any;
      
      if (sortField === 'county') {
        aValue = a.county;
        bValue = b.county;
      } else if (sortField === 'population') {
        aValue = a.population;
        bValue = b.population;
      } else {
        aValue = a.metrics[sortField as keyof typeof a.metrics][2023];
        bValue = b.metrics[sortField as keyof typeof b.metrics][2023];
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortField, sortDirection]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getMetricValue = (county: CountyData, metric: string) => {
    return county.metrics[metric as keyof typeof county.metrics][2023];
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4" />;
    return sortDirection === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />;
  };

  const getMetricIcon = (metric: string) => {
    const icons = {
      maternalMortality: Heart,
      lowBirthWeight: Baby,
      pretermBirth: AlertTriangle,
      teenBirthRate: Users
    };
    const Icon = icons[metric as keyof typeof icons] || Users;
    return <Icon className="w-4 h-4" />;
  };

  const getMetricColor = (metric: string, value: number) => {
    const maxValue = Math.max(...data.map(d => d.metrics[metric as keyof typeof d.metrics][2023]));
    const normalizedValue = value / maxValue;
    
    if (normalizedValue > 0.8) return 'text-red-600';
    if (normalizedValue > 0.6) return 'text-orange-600';
    if (normalizedValue > 0.4) return 'text-green-600';
    return 'text-blue-600';
  };

  return (
    <div className="space-y-4">
      {/* Table Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-florida-blue to-blue-600 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Health Metrics by County</h4>
            <p className="text-sm text-gray-500">Click column headers to sort data</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Showing {sortedData.length} counties
        </div>
      </div>

      {/* Enhanced Table with Modern Borders */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200/50 overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100/80 border-b-2 border-gray-200">
              <tr>
                <th 
                  className="px-6 py-4 text-left cursor-pointer group hover:bg-gray-200/50 transition-colors duration-200 border-r border-gray-200"
                  onClick={() => handleSort('county')}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">County</span>
                    <div className={`transition-colors duration-200 ${sortField === 'county' ? 'text-florida-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {getSortIcon('county')}
                    </div>
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left cursor-pointer group hover:bg-gray-200/50 transition-colors duration-200 border-r border-gray-200"
                  onClick={() => handleSort('population')}
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Population</span>
                    <div className={`transition-colors duration-200 ${sortField === 'population' ? 'text-florida-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {getSortIcon('population')}
                    </div>
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left cursor-pointer group hover:bg-gray-200/50 transition-colors duration-200 border-r border-gray-200"
                  onClick={() => handleSort('maternalMortality')}
                >
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Maternal Mortality</span>
                    <div className={`transition-colors duration-200 ${sortField === 'maternalMortality' ? 'text-florida-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {getSortIcon('maternalMortality')}
                    </div>
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left cursor-pointer group hover:bg-gray-200/50 transition-colors duration-200 border-r border-gray-200"
                  onClick={() => handleSort('lowBirthWeight')}
                >
                  <div className="flex items-center space-x-2">
                    <Baby className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Low Birth Weight</span>
                    <div className={`transition-colors duration-200 ${sortField === 'lowBirthWeight' ? 'text-florida-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {getSortIcon('lowBirthWeight')}
                    </div>
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left cursor-pointer group hover:bg-gray-200/50 transition-colors duration-200 border-r border-gray-200"
                  onClick={() => handleSort('pretermBirth')}
                >
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Preterm Birth</span>
                    <div className={`transition-colors duration-200 ${sortField === 'pretermBirth' ? 'text-florida-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {getSortIcon('pretermBirth')}
                    </div>
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left cursor-pointer group hover:bg-gray-200/50 transition-colors duration-200"
                  onClick={() => handleSort('teenBirthRate')}
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Teen Birth Rate</span>
                    <div className={`transition-colors duration-200 ${sortField === 'teenBirthRate' ? 'text-florida-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {getSortIcon('teenBirthRate')}
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/50 backdrop-blur-sm">
              {sortedData.map((county, index) => (
                <tr 
                  key={county.county} 
                  className={`hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-green-50/50 transition-all duration-300 cursor-pointer border-b border-gray-100 ${
                    index % 2 === 0 ? 'bg-white/30' : 'bg-gray-50/30'
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap border-r border-gray-100">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-florida-blue to-florida-green rounded-full mr-3"></div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{county.county}</div>
                        <div className="text-xs text-gray-500">Florida County</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-gray-100">
                    <div className="text-sm text-gray-900 font-medium">
                      {county.population.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">residents</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className={`text-sm font-bold ${getMetricColor('maternalMortality', getMetricValue(county, 'maternalMortality'))}`}>
                        {getMetricValue(county, 'maternalMortality').toFixed(1)}
                      </div>
                      <div className="text-xs text-gray-500">per 100k</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className={`text-sm font-bold ${getMetricColor('lowBirthWeight', getMetricValue(county, 'lowBirthWeight'))}`}>
                        {getMetricValue(county, 'lowBirthWeight').toFixed(1)}
                      </div>
                      <div className="text-xs text-gray-500">%</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className={`text-sm font-bold ${getMetricColor('pretermBirth', getMetricValue(county, 'pretermBirth'))}`}>
                        {getMetricValue(county, 'pretermBirth').toFixed(1)}
                      </div>
                      <div className="text-xs text-gray-500">%</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className={`text-sm font-bold ${getMetricColor('teenBirthRate', getMetricValue(county, 'teenBirthRate'))}`}>
                        {getMetricValue(county, 'teenBirthRate').toFixed(1)}
                      </div>
                      <div className="text-xs text-gray-500">per 1k</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>High</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Low</span>
          </div>
        </div>
        <div className="text-xs">
          Data represents 2023 health metrics
        </div>
      </div>
    </div>
  );
};

export default DataTable; 