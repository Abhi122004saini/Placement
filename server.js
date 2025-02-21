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
    "user_id": "your_name_ddmmyyyy",
    "email": "your_email@xyz.com",
    "roll_number": "your_roll_number",
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
