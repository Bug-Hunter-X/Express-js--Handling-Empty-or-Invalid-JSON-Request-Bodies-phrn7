const express = require('express');
const app = express();
app.use(express.json({ errorHandler: (err, req, res, next) => {
  console.error(err);
  res.status(400).json({ error: 'Invalid JSON request body' });
}});)
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));