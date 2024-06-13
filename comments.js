//Create web server
const express = require('express');
const app = express();

//Use the body parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Use the static middleware
app.use(express.static('public'));

//Use the comments router
const commentsRouter = require('./comments-router');
app.use('/comments', commentsRouter);

//Listen on port 4001
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});