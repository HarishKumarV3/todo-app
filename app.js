const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use('/api/todos', require('./routes/todoRoutes'));

app.use(require('./middlewares/errorHandler'));

app.listen(5050, () =>
  console.log('Server running on http://localhost:5050')
);
