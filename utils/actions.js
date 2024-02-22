'use server'
import prisma from '../utils/db'
import { revalidatePath } from 'next/cache'


export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt:'desc'
        }
    })
}


export const createTask = async (formData) => {
    'use server'
    const content = formData.get('content')
    // console.log(content)
    await prisma.task.create({
        data: {
            content
        }
    })
    revalidatePath('/tasks')

}