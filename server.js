const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highest_alphabet = alphabets.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).pop() || [];
  res.json({
    "is_success": true,
    "user_id": "Abhishek",
    "email": "22bcs15315@cucdh.in",
    "roll_number": "22BCS15315",
    "numbers": numbers,
    "alphabets": alphabets,
    "highest_alphabet": highest_alphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ "operation_code": 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
