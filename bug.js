const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for cases where req.body is undefined or invalid
  console.log('Received user:', user); 
  res.status(201).send();
});
app.listen(3000, () => console.log('Server listening on port 3000'));