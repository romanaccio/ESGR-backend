const express = require('express');
const cors = require('cors');
// const axios = require('axios');

const PORT = process.env.PORT || 4000;

const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const surveys = {};
app.get('/', (req, res) => {
  res.send('<h1>Hello ESG Revolution!</h1>');
});

app.get('/surveys', (req, res) => {
  res.send(surveys);
});

app.post('/surveys', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  console.log(`received body : ${req.body}`);
  const { username, data } = req.body;

  const survey = { id: id, username: username, data: data };
  surveys[survey.username] = survey;
  res.status(201).send(surveys[survey.username]);
});

app.listen(PORT, () => {
  console.log(`Hello! Listening to port ${PORT} for surveys`);
});
