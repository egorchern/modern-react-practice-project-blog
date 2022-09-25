import { useState } from 'react';
import Task from './Task';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import CreateTaskDialog from './CreateTaskDialog';

const Todo = () => {
    const [tasks, setTasks] = useState([
        { task_description: "Complete my Todo app", id: nanoid(), isComplete: false },
        {
            task_description: "Master frontend animations", id: nanoid(), isComplete: false
        }
    ]);
    const [open, setOpen] = useState(false);
    const markTaskCompleted = (index) => {
        let tasksCopy = Array.from(tasks);
        tasksCopy[index].isComplete = !tasksCopy[index].isComplete;
        setTasks(tasksCopy);
    }
    const handleTaskCreateClick = () => {
        if (!open) {
            setOpen(true);
        }
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleTaskCreate = (taskDescription) => {
        const newTask = {task_description: taskDescription, id: nanoid(), isComplete: false};
        setTasks([...tasks, newTask])
        handleClose()
    }

    return (
        <div className='todo-container'>
            <div className='flex-row'>
                <CreateTaskDialog open={open} handleClose={handleClose} handleTaskCreate={handleTaskCreate}>

                </CreateTaskDialog>
                <Button variant="contained" style={{ margin: "0.5em" }} color="success" startIcon={
                    <span className="material-icons">
                        add
                    </span>
                } onClick={handleTaskCreateClick}>
                    Create New
                </Button>
                <Button variant="contained" color="error" style={{ margin: "0.5em" }} className="margin-small" startIcon={
                    <span className="material-icons">
                        delete
                    </span>
                }>

                    Delete All
                </Button>
            </div>

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
