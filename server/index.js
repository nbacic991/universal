const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.json());

var allowedOrigins = [
  'http://localhost:3000'];
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

const posts = require('./routes/api/users');

app.use('/api/users', posts);

const port = process.env.PORT || process.env.PORT;

app.listen(port,
  () => console.log(`Server started on ${port}`)
);

