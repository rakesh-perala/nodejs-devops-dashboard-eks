const express = require('express');
const os = require('os');

const app = express();

// API route
app.get('/api', (req, res) => {
  res.json({
    message: "🚀 DevOps Dashboard Running",
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: process.uptime()
  });
});

// health check
app.get('/health', (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
