const express = require('express');
const app = express();
const PORT = 4050;

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/brooms', require('./routes/brooms'));
app.use('/categories', require('./routes/categories'));

app.listen(PORT, () => console.log('puerto funcionando en el 4050' + PORT));