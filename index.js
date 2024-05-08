

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.post('/average', (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: 'Invalid input. Please provide an array of numbers.' });
  }

  if (numbers.length === 0) {
    return res.status(400).json({ error: 'Empty array. Please provide at least one number.' });
  }


  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  res.json({ average });
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
//curl -X POST -H "Content-Type: application/json" -d '{"numbers":[1, 2, 3, 4, 5]}' http://localhost:3000/average
