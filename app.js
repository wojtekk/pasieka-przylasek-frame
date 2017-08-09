const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<html><title>Pasieka Przylasek</title><frameset><frame src="https://sites.google.com/pasiekaprzylasek.pl/www"></frameset></html>').end();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
