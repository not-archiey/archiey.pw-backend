require('dotenv');

const faker = require('faker');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/api/test', (req,res) => {
    res.send(`Also, the API says hello to ${faker.name.firstName()}!`)
})

app.listen(port, () => console.log(`Listening on ${port}`));