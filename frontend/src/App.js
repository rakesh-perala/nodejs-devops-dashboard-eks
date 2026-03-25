import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 DevOps Dashboard</h1>
      <p><b>Message:</b> {data.message}</p>
      <p><b>Hostname:</b> {data.hostname}</p>
      <p><b>Platform:</b> {data.platform}</p>
      <p><b>Uptime:</b> {data.uptime}</p>
    </div>
  );
}

export default App;
