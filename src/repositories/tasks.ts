import prisma from "../lib/prisma";
 
interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const createNewTask = async (newTask: {
  content: string;
  isCompleted: boolean;
}) => {
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
