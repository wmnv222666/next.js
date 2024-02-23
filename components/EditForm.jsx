'use client'
import { editTask } from "../utils/actions";

const EditForm = ({ task }) => {
  if (!task) {
    return <div>Loading...</div>;
  }
  console.log(task);
    const {id,completed,content} = task
    
  return (
    // action={}不要加“”已经错了2次了·
        <form action={editTask} className="max-w-sm p-12 border
         border-base-300 rounded-lg">
            <input type="hidden" name="id" value={id} />
            <input type="text"
                required
                defaultValue={content}
                name="content"
                className="input input-bordered w-full"
            />
            {/* conmpleted */}
            <div className="form-control my-4">
                <label htmlFor="completed" className="label cursor-pointer">
                    <span className="label-text">completed</span>
                    <input type="checkbox" defaultChecked={completed} id="completed"
                    name="completed" className="checkbox checkbox-primary checkbox-sm"/>
                </label>
            </div>
            <button className="btn btn-primary btn-block">Edit</button>
      </form>
    // <div>EditForm</div>
  )
}

export default EditForm