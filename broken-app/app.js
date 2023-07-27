const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON body

app.post('/', async (req, res, next) => {
  try {
    const developers = req.body.developers;
    const out = [];

    // Handle rate limiting by batching requests in groups of 60
    const batchSize = 60;
    for (let i = 0; i < developers.length; i += batchSize) {
      const batch = developers.slice(i, i + batchSize);
      const results = await Promise.all(batch.map(d => axios.get(`https://api.github.com/users/${d}`)));
      out.push(...results.map(r => ({ name: r.data.name, bio: r.data.bio })));
    }

    return res.json(out);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
