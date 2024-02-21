// console.log("Checking import path for @utils/db...");
import prisma from '../../utils/db'

//相当于insert数据库的内容
const prismaHandle = async () => {
    await prisma.task.create({
        data: {
            content: 'wake up'
        },
    });
    const allTasks = await prisma.task.findMany({
        // schema.prisma 对应的数据库
        orderBy: {
            createdAt: 'desc'
        }
    })
    return allTasks;
}
// console.log("Calling prismaHandle...");
// prismaHandle().then(tasks => console.log("Tasks:", tasks)).catch(error => console.error("Error:", error));

const PrismaExample = async () => {
    const tasks = await prismaHandle()
    return (
        <div>
            <h1 className='text-7xl'>Prisma Page</h1>
            {tasks.map((task) => {
                return (
                    <h2 key={task.id} className='text-xl py-2'>
                        {task.content}
                    </h2>

                )
                
            })}
        </div>
    );
}

export default PrismaExample;
