import React, { useEffect, useState } from "react";

const ServiceHealthTable = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

    // Normal fetch API
  const fetchData = () => {
    fetch("http://localhost:5000/api/v1/servicehealth")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.services); // Extract the "services" array
        setIsLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        setError("Failed to fetch data. Is the server running?");
        setIsLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();

    // Set up polling every 5 seconds so that the data is always up-to-date
    const interval = setInterval(fetchData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Service Health</h2>
      <table
        border="1"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th>Service Name</th>
            <th>East US</th>
            <th>West US</th>
            <th>West Europe</th>
            <th>East Asia</th>
            <th>Canary</th>
            <th>Staging</th>
          </tr>
        </thead>
        <tbody>
          {data.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              {Object.keys(service.status).map((region, idx) => (
                <td
                  key={idx}
                  style={{
                    color:
                      service.status[region] === "Healthy" ? "green"
                        : service.status[region] === "Degraded" ? "orange"
                        : "red",
                  }}
                >
                  {service.status[region]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceHealthTable;
