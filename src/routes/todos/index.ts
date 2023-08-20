import express from "express";
import TodosController from "../../controllers/todos.controller";

const todoRoutes = express.Router()

todoRoutes.post('/', TodosController.createTask)

export default todoRoutes