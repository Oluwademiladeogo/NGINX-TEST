const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const appName = 'Minimalistic app';

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
