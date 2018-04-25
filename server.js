const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`App live on http://localhost:${port}`));

app.use('/:id', express.static('public'));
app.use(cors());
