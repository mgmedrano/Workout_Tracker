const express = require('express');
const mongoose = require('mongoose');
const morgan = require ('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI) || 'mongodb:/localhost/dbWorkout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });