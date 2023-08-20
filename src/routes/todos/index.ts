import express from "express";
import TodosController from "../../controllers/todos.controller";

const todoRoutes = express.Router()

todoRoutes.post('/', TodosController.createTask)
todoRoutes.patch('/:id', TodosController.updateTask)
todoRoutes.get('/:id', TodosController.getTask)

export default todoRoutes