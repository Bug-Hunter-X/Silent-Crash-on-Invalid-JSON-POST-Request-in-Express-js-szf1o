const express = require('express');
const app = express();
app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ error: 'Invalid JSON payload' });
  }
  console.error(err);
  res.status(500).send({ error: 'Internal Server Error' });
});
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user) {
    return res.status(400).send({ error: 'Missing user data' });
  }
  //Further validation of user data can be added here
  console.log('Received user:', user);
  res.status(201).send();
});
app.listen(3000, () => console.log('Server listening on port 3000'));