const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/signup.html'));
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  res.send('Signup successful');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));