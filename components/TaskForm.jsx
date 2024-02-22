// import { data } from 'autoprefixer'
// import React from 'react'
// import prisma from '../utils/db'
// import { revalidatePath } from 'next/cache'
import { createTask } from "@/utils/actions";

// The FormData object, which contains the data submitted in the form

//把这些都封装到utlis的action中
// const createTask = async (formData) => {
//   'use server'
//   const content = formData.get('content')
//   // console.log(content)
//   await prisma.task.create({
//     data: {
//       content
//     }
//   })
//   revalidatePath('/tasks')

// }


const TaskForm = () => {
  return (
    // action
    <form action={createTask}>
      <div className="join w-full">
        <input type="text"
          className='input input-bordered join-item w-full'
          placeholder="type here"
          name='content'
          required
        />
        <button type='submit' className="btn btn-primary join-item">
          Create task

        </button>
      </div>
    </form>
  )
}

export default TaskForm