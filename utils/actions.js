'use server'
import prisma from '../utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
//语法都类似于Python

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
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

export const deleteTask = async (formData) => {
    const id = formData.get('id')
    await prisma.task.delete({
        where: { id }
    })
    revalidatePath('/tasks')
}

export const editTask = async (formData) => {
    const id = formData.get('id')
    const content = formData.get('content')
    const completed = formData.get('completed')
    await prisma.task.update({
        where: { id },
        data: {
            content,
            completed: completed === 'on'?true:false
        }
    })
    redirect('/tasks')
}
export const getTask = async (id) => {
    return prisma.task.findUnique({
        where: { id }
    })
}

// export const updateTask = async (id) => {
//     return prisma.task.findUnique({
//         where: { id }
//     })
// }
