const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/sendText', (req, res) => {
    const receivedText = req.body.text;
    console.log('Text received:', receivedText);
    res.send('Text received');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
