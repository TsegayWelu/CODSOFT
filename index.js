const express = require('express');
const app = express();
app.use(express.json());
//i am  Importing my routes here
const routes = require('./routes/route');
app.use(express.json());

// i am routes here  routes as middleware
app.use('/', routes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});