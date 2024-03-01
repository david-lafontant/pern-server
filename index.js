const express = require('express');
const cors = require('cors');

// create app
const app = express();
// middleware
app.use(cors());
app.use(express.json());


//launch server
app.listen(5000, () => {
  console.log("Api is running and running! ad");
});
