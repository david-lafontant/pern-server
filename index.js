const express = require('express');
const cors = require('cors');
const pool = require('./db');

// create app

const app = express();


// middleware

app.use(cors());
app.use(express.json());


// create a todo - POST

app.post("/todos", async (req, res) => {
  try {
    const { content } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (content) VALUES($1)", [content]);
    res.json(newTodo);
  } catch (err) {

    console.error(err.message);
  }

});


//launch server

app.listen(5000, () => {
  console.log("Api is running and running! ad");
});
