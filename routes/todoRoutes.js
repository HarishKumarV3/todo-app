const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');
const validate = require('../middlewares/validateTodo');

router.get('/', controller.getTodos);
router.post('/', validate, controller.addTodo);
router.put('/:id', validate, controller.updateTodo);
router.delete('/:id', controller.deleteTodo);

module.exports = router;
