import Link from 'next/link';
import DeleteForm from './DeleteForm';
import { getAllTasks } from '@/utils/actions';

const TaskList = async () => {
    const tasks = await getAllTasks()

    if (tasks.length === 0) {
        return <h2 className='mt-8 font-medium texe-lg'>No Tasks to shows</h2>
    }

  return (
      <ul className='mt-8'>
          {tasks.map((task) => (
              //   console.log(task,"aaa")
              <li key={task.id} className='flex just-between 
              items-center px-6 py-4 mb-4 border border-base-300 rounded-lg
              shadow-lg'>
                  <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>
                      {task.content}
                  </h2>
                  <div className='flex gap-6 items-center'>
                      <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
                          edit
                      </Link>
                      <DeleteForm id={task.id}></DeleteForm>
                  </div>
              </li>
          ))}
   </ul>
  )
}

export default TaskList