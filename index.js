const express = require('express');
const cors = require('cors');
const pool = require('./db');
const port = 5000;
// create app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// create a todo - POST
app.post("/todos", async (req, res) => {
  try {
    const { content } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (content) VALUES($1) RETURNING * ", [content]);
    res.json(newTodo.rows);
  } catch (err) {

    console.error(err.message);
  }

});

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    res.json(todos.rows);
  } catch (err) {
    console.error(err.message)
  }
});


//launch server

app.listen(port, () => {
  console.log("Api is running and running! ad");
});
