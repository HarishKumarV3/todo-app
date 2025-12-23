const db = require('../db');

/*
  Get all todos from database
*/
function getAllTodos(callback) {
  const sql = 'SELECT * FROM todos';

  db.query(sql, (error, results) => {
    if (error) {
      return callback(error);
    }
    callback(null, results);
  });
}

/*
  Insert a new todo
*/
function createTodo(text, callback) {
  const sql = 'INSERT INTO todos (text) VALUES (?)';

  db.query(sql, [text], (error, result) => {
    if (error) {
      return callback(error);
    }
    callback(null, result);
  });
}

function updateTodo(id, text, callback) {   
  const sql = 'UPDATE todos SET text = ? WHERE id = ?';
  db.query(sql, [text, id], (error, result) => {
  if (error) {
      return callback(error);
    }
    callback(null, result);
  });
}

/*
  Delete todo by ID
*/
function removeTodo(id, callback) {
  const sql = 'DELETE FROM todos WHERE id = ?';

  db.query(sql, [id], (error, result) => {
    if (error) {
      return callback(error);
    }
    callback(null, result);
  });
}

module.exports = {
  getAllTodos,
  createTodo,
  removeTodo,
  updateTodo
};  