import { NextFunction, Request, Response } from "express";
import TodoService from "../services/todos.srv";

class TodosController {
    static async createTask(req: Request, res:Response, next: NextFunction){
        try {
            res.status(201).send(await TodoService.createTask(req.body))
        } catch (error) {
            next(error)
        }
    }
}

export default TodosController