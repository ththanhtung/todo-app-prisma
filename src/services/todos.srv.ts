import { createNewTask } from "../repositories/tasks"

interface NewTaskReq {
    content: string;
    isCompleted: boolean
}

class TodoService {
    static async createTask(newTaskParams: NewTaskReq){
        const newTask = await createNewTask(newTaskParams)
        return newTask
    }
}

export default TodoService