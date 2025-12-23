const TodoModel = require('../models/todoModel');

/*
  GET /api/todos
*/
function getTodos(req, res, next) {
  
  TodoModel.getAllTodos((error, todos) => {
    if (error) {
      return next(error);
    }
    res.json(todos);
  });
}

/*
  POST /api/todos
*/
function addTodo(req, res, next) {
  const { text } = req.body;

  TodoModel.createTodo(text, (error, result) => {
    if (error) {
      return next(error);
    }
    res.status(201).json({
      message: 'Todo created',
      id: result.insertId
    });
  });
}

/*
  DELETE /api/todos/:id
*/
function deleteTodo(req, res, next) {
  const id = parseInt(req.params.id);

  TodoModel.removeTodo(id, (error) => {
    if (error) {
      return next(error);
    }
    res.json({ message: 'Todo deleted' });
  });
}

function updateTodo(req, res, next) {   
  console.log(req.body);
  const id = parseInt(req.params.id);
  const { text } = req.body;

  TodoModel.updateTodo(id, text, (error, result) => {
    if (error) {
      return next(error);
    }   
    res.json({ message: 'Todo updated' });
  });
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
};
