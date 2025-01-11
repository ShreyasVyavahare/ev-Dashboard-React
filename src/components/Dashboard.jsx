import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import EVChart from './EVChart';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Parse the CSV file
    Papa.parse('/data/Electric_Vehicle_Population_Data.csv', {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data.length > 0 ? <EVChart data={data} /> : <p>Loading data...</p>}
    </div>
  );
}

export default Dashboard;
