import { useEffect, useState } from 'react';
import Task from './Task';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import CreateTaskDialog from './CreateTaskDialog';

const getTasksFromLocal = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    if (tasks === null){
        return []
    }
    return tasks;
}

const storeTasksLocal = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const clearTasksLocal = () => {
    localStorage.removeItem("tasks");
}

const Todo = () => {
    

    const [tasks, setTasks] = useState(getTasksFromLocal());
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
        const newTasks = [...tasks, newTask]
        setTasks(newTasks);
        handleClose()
        storeTasksLocal(newTasks)
    }

    const handleDeleteTasksClick = () => {
        if (window.confirm("Are you sure you want to delete all tasks?")){
            setTasks([]);
            clearTasksLocal();
        }
        
    }

    useEffect(() => {
        storeTasksLocal(tasks)
    }, [tasks])

    return (
        <div className='todo-container margin-small'>
            <h2 style={{textAlign: "center"}}>Todo list</h2>
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
                <Button variant="contained" color="error" style={{ margin: "0.5em" }} onClick={handleDeleteTasksClick} className="margin-small" startIcon={
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
