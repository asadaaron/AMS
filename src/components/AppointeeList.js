import { useEffect, useState } from "react";

const AppointeeList = () => {
  const [appointees, setAppointees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/appointee-list") // API Call
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Convert response to JSON
      })
      .then((data) => {
        setAppointees(data); // Store data in state
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Runs only once on component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>AppointeeList List</h2>
      <ul>
        {appointees.map((appointee) => (
          <li key={appointee.id}>
            {appointee.name} - {appointee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointeeList;
