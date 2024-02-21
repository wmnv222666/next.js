import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const Tasks = () => {
    return (
        <div className="max-w-lg">
            <TaskForm></TaskForm>
            <TaskList></TaskList>
        </div>
    );
}

export default Tasks;