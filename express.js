const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('express server running...');
});

app.listen(3000);