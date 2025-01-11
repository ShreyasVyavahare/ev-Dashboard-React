import React, { useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  PieController,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ArcElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PieController,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function EVChart({ data }) {
  const [activeTab, setActiveTab] = useState('Bar');
  const [selectedYear, setSelectedYear] = useState('All');

  // Process data for analytics
  const makeCounts = data.reduce((acc, row) => {
    const make = row.Make || 'Unknown Make'; // Add fallback
    acc[make] = (acc[make] || 0) + 1;
    return acc;
  }, {});
  
  const yearCounts = data.reduce((acc, row) => {
    const year = row.ModelYear || 'Unknown Year'; // Add fallback
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});
  

  const filteredData =
    selectedYear === 'All'
      ? data
      : data.filter((row) => row.ModelYear === selectedYear);

  // Chart data for bar chart
  const barData = {
    labels: Object.keys(makeCounts).slice(0, 10), // Top 10 makes
    datasets: [
      {
        label: 'Number of EVs',
        data: Object.values(makeCounts).slice(0, 10),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart data for pie chart
  const pieData = {
    labels: Object.keys(makeCounts).slice(0, 5), // Top 5 makes
    datasets: [
      {
        label: 'Number of EVs',
        data: Object.values(makeCounts).slice(0, 5),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart data for line chart (trends over years)
  const lineData = {
    labels: Object.keys(yearCounts),
    datasets: [
      {
        label: 'EV Population Over Years',
        data: Object.values(yearCounts),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>EV Analytics Dashboard</h2>

      {/* Filter Dropdown */}
      <div style={{ margin: '10px 0', textAlign: 'center' }}>
        <label style={{ marginRight: '10px' }}>Filter by Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="All">All Years</option>
          {Object.keys(yearCounts).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs for Switching Between Charts */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        {['Bar', 'Pie', 'Line'].map((tab) => (
          <button
            key={tab}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: activeTab === tab ? '#007bff' : '#f0f0f0',
              color: activeTab === tab ? '#fff' : '#000',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab} Chart
          </button>
        ))}
      </div>

      {/* Render Charts Based on Active Tab */}
      <div>
        {activeTab === 'Bar' && <Bar data={barData} />}
        {activeTab === 'Pie' && <Pie data={pieData} />}
        {activeTab === 'Line' && <Line data={lineData} />}
      </div>
    </div>
  );
}

export default EVChart;
