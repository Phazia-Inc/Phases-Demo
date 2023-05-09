const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.options('/endpoint/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.end();
});


app.post('/endpoint/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Response from endpoint.');
});



app.listen(process.env.PORT || 8080, () => {
    console.log('Server started.');
});