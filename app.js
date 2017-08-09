const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.redirect('https://sites.google.com/pasiekaprzylasek.pl/www');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});