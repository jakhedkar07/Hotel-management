import React, { useState } from 'react';

function DataDisplay() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://your-server-endpoint');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="data-container">
      {data.map((item) => (
        <div className="data-item" key={item.id}>
          <span className="data-item-label">Name:</span> {item.name}
          <br />
          <span className="data-item-label">Email:</span> {item.email}
          <br />
          <span className="data-item-label">Message:</span> {item.message}
        </div>
      ))}
    </div>
  );
}

export default DataDisplay;
