import { createNewTask, findOneTask, updateTask } from "../repositories/tasks"

interface NewTaskReq {
    content: string;
    isCompleted: boolean
}

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;
}

interface UpdateContentReq {
    id:string
    content?: string;
    isCompleted?: boolean;
    [key: string]: any
}

class TodoService {
    static async createTask(newTaskParams: NewTaskReq){
        const newTask = await createNewTask(newTaskParams)
        return newTask
    }

    static async updateTask(updateContent: UpdateContentReq){
        const task = await findOneTask({id:updateContent.id}) as Task
        

        const updates = Object.keys(updateContent)

        if (!task){
            return {
                errors:'cannot update task'
            }
        }

        updates.forEach((update) => {
          task[update] = updateContent[update];
        });

        console.log(task);
        
        const updatedTask = await updateTask(task.id, {
            content: task.content,
            isCompleted: task.isCompleted
        })

        return updatedTask
    }

    static async getTask(id:string){
        const task = findOneTask({id})
        if (!task){
            return {
                errors: [
                    {
                        message: 'cannot find task'
                    }
                ]
            }
        }

        return task
    }
}

export default TodoService