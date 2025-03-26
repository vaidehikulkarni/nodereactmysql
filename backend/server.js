const express = require('express');
const cors = require('cors');
const Item = require('./models/item');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// GET route to fetch items from the database
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.findAll();
    console.log("items",items);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// Sync database and start server
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });