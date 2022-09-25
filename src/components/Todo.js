import {useState} from 'react';
import Task from './Task';
import {nanoid} from 'nanoid';

const Todo = () => {
    const [tasks, setTasks] = useState([
        {task_description: "Complete my Todo app", id:nanoid(), isComplete: false}
    ]);
    const markTaskCompleted = (index) => {
        let tasksCopy = Array.from(tasks);
        tasksCopy[index].isComplete = !tasksCopy[index].isComplete;
        setTasks(tasksCopy);
    }
    return ( 
        <div className='todo-container'>
            {tasks.map((task, index) => {
                return (
                    <Task key={task.id} task={task} index={index} markTaskCompleted={markTaskCompleted}>

                    </Task>
                )
            })}
        </div>
    );
}
 
export default Todo;
