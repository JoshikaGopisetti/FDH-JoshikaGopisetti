import React, { useState, useMemo, useEffect } from 'react';
import { floridaHealthData, getMetricUnit } from '../data/floridaHealthData';
import { Download, Info, TrendingUp, TrendingDown, Users, Baby, Heart, AlertTriangle, Search, Filter, BarChart3, MapPin, Sparkles } from 'lucide-react';
import TrendChart from './TrendChart';
import DemographicsChart from './DemographicsChart';
import CountyComparisonChart from './CountyComparisonChart';
import DataTable from './DataTable';

const Dashboard: React.FC = () => {
  const [selectedCounty, setSelectedCounty] = useState<string>('Miami-Dade');
  const [selectedMetric, setSelectedMetric] = useState<string>('lowBirthWeight');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const selectedCountyData = useMemo(() => 
    floridaHealthData.find(county => county.county === selectedCounty), 
    [selectedCounty]
  );

  const filteredCounties = useMemo(() => 
    floridaHealthData.filter(county => 
      county.county.toLowerCase().includes(searchTerm.toLowerCase())
    ), 
    [searchTerm]
  );

  const currentMetricValue = selectedCountyData?.metrics[selectedMetric as keyof typeof selectedCountyData.metrics]?.[2023] || 0;
  const previousMetricValue = selectedCountyData?.metrics[selectedMetric as keyof typeof selectedCountyData.metrics]?.[2022] || 0;
  const metricChange = currentMetricValue - previousMetricValue;
  const isImproving = metricChange < 0;

  const exportToCSV = () => {
    const headers = ['County', 'Population', 'Maternal Mortality (2023)', 'Low Birth Weight % (2023)', 'Preterm Birth % (2023)', 'Teen Birth Rate (2023)'];
    const csvData = floridaHealthData.map(county => [
      county.county,
      county.population.toLocaleString(),
      county.metrics.maternalMortality[2023],
      county.metrics.lowBirthWeight[2023],
      county.metrics.pretermBirth[2023],
      county.metrics.teenBirthRate[2023]
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'florida-health-data-2023.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const metricIcons = {
    maternalMortality: Heart,
    lowBirthWeight: Baby,
    pretermBirth: AlertTriangle,
    teenBirthRate: Users
  };

  const MetricIcon = metricIcons[selectedMetric as keyof typeof metricIcons] || TrendingUp;

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-florida-blue mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-700">Loading Florida Health Dashboard...</h2>
          <p className="text-gray-500 mt-2">Enhanced with modern visualizations</p>
        </div>
      </div>
    );
  }

                    return (
                    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 animate-fade-in border-8 border-yellow-400">
      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-5xl font-display bg-gradient-to-r from-florida-blue to-florida-green bg-clip-text text-transparent tracking-tight">
                Florida Health Data Enhancement - Mock Version
              </h1>
              <p className="mt-3 text-xl font-body text-gray-600 font-light tracking-wide">
                Built by Joshika Gopisetti
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button
                onClick={exportToCSV}
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-florida-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <MapPin className="w-4 h-4 inline mr-2 text-florida-blue" />
                Select County
              </label>
              <select
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-florida-blue focus:border-florida-blue bg-white/80 backdrop-blur-sm transition-all duration-200"
              >
                {floridaHealthData.map(county => (
                  <option key={county.county} value={county.county}>
                    {county.county}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <BarChart3 className="w-4 h-4 inline mr-2 text-florida-green" />
                Health Metric
              </label>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-florida-blue focus:border-florida-blue bg-white/80 backdrop-blur-sm transition-all duration-200"
              >
                <option value="lowBirthWeight">Low Birth Weight %</option>
                <option value="pretermBirth">Preterm Birth %</option>
                <option value="maternalMortality">Maternal Mortality Rate</option>
                <option value="teenBirthRate">Teen Birth Rate</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Search className="w-4 h-4 inline mr-2 text-gray-500" />
                Search Counties
              </label>
              <input
                type="text"
                placeholder="Type county name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-florida-blue focus:border-florida-blue bg-white/80 backdrop-blur-sm transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-r from-florida-blue to-blue-600 rounded-xl">
                  <MetricIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  {selectedMetric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {currentMetricValue.toFixed(1)} {getMetricUnit(selectedMetric)}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {isImproving ? (
                <div className="flex items-center text-green-600">
                  <TrendingDown className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    {Math.abs(metricChange).toFixed(1)} from 2022
                  </span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    {Math.abs(metricChange).toFixed(1)} from 2022
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-r from-florida-green to-green-600 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Population</p>
                <p className="text-2xl font-bold text-gray-900">
                  {selectedCountyData?.population.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Maternal Mortality</p>
                <p className="text-2xl font-bold text-gray-900">
                  {selectedCountyData?.metrics.maternalMortality[2023].toFixed(1)} per 100k
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                  <Baby className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Teen Birth Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {selectedCountyData?.metrics.teenBirthRate[2023].toFixed(1)} per 1k
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Trend Chart */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-xl font-display text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-florida-blue" />
              3-Year Trend Analysis
            </h3>
            <TrendChart 
              countyData={selectedCountyData!} 
              metric={selectedMetric}
              metricName={selectedMetric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            />
          </div>

          {/* Demographics Chart */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-xl font-display text-gray-900 mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-florida-green" />
              Health Disparities by Race/Ethnicity
            </h3>
            <DemographicsChart 
              countyData={selectedCountyData!} 
              metric={selectedMetric}
            />
          </div>
        </div>

        {/* County Comparison */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          <h3 className="text-xl font-display text-gray-900 mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-florida-blue" />
            County Comparison - {selectedMetric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </h3>
          <CountyComparisonChart 
            data={floridaHealthData} 
            metric={selectedMetric}
            metricName={selectedMetric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          />
        </div>

        {/* Data Table */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          <h3 className="text-xl font-display text-gray-900 mb-6 flex items-center">
            <Filter className="w-5 h-5 mr-2 text-florida-green" />
            Detailed Data Table
          </h3>
          <DataTable 
            data={filteredCounties} 
            selectedMetric={selectedMetric}
          />
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200/50 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-start">
            <div className="p-3 bg-blue-500 rounded-xl mr-4 flex-shrink-0">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-display text-blue-900 mb-3">About This Demo</h3>
              <p className="text-blue-800 mb-4 leading-relaxed font-body">
                This enhanced dashboard demonstrates improved data visualization capabilities for Florida health data, 
                showcasing interactive charts, demographic analysis, and trend identification that could enhance FLHealthCHARTS.gov.
              </p>
              <p className="text-blue-800 mb-4 leading-relaxed font-body">
                <strong>Key Improvements:</strong> Interactive county selection, demographic disparity analysis, 
                trend visualization, export functionality, and mobile-responsive design.
              </p>
              <p className="text-blue-800 leading-relaxed font-body">
                <strong>Data Source:</strong> Mock data representing realistic Florida county health metrics (2021-2023). 
                Actual implementation would integrate with Florida DOH data systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300 text-lg font-medium">
              Florida Health Data Enhancement - Mock Version
            </p>
            <p className="text-gray-400 mt-2">
              Built by Joshika Gopisetti
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Demonstrating enhanced data visualization and analysis capabilities for public health reporting
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard; 