const express = require('express');
const app = express();
const PORT = 4050;

app.use(express.json());



app.listen(PORT, () => console.log('puerto funcionando en el 4050' + PORT));