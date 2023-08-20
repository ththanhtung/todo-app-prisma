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
    static async updateTask(req: Request, res:Response, next: NextFunction){
        try {
            const {id} = req.params
            res.status(200).send(await TodoService.updateTask({id,...req.body}))
        } catch (error) {
            next(error)
        }
    }

    static async getTask(req: Request, res: Response, next: NextFunction){
        try {
            const {id} = req.params
            res.send(await TodoService.getTask(id))
        } catch (error) {
            next(error)
        }
    }
    
    static async deleteTask(req: Request, res: Response, next: NextFunction){
        try {
            const {id} = req.params
            res.send(await TodoService.deleteTask(id))
        } catch (error) {
            next(error)
        }
    }
}

export default TodosController