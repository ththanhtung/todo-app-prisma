import prisma from "../lib/prisma";
 
interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const createNewTask = async (newTask: {
  content: string;
  isCompleted: boolean;
})=> {
  try {
    const task = await prisma.task.create({
      data: {
        content: newTask.content,
        isCompleted: newTask.isCompleted,
      },
    });
    return task;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect;
  }
};

const updateTask = async (taskId:string, updateContent: {
  content?: string;
  isCompleted?: boolean;
})=> {
  const updatedTask = prisma.task.update({
    where: {
      id: taskId,
    },
    data: updateContent,
  });

  return updatedTask
};

const findOneTask = async (filter: {[k: string]: any})=>{
  try {
    return await prisma.task.findFirst({
      where: filter
    })
  } catch (error) {
    console.log(error);
  }
}

export {
  createNewTask, 
  updateTask,
  findOneTask
}