import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
  
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>{message ? message : "Loading..."}</p>
    </div>
  );
}

export default App;
