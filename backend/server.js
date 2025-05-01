const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
