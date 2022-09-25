import Card from '@mui/material/Card';

const Task = (props) => {
    const handleTaskClick = () => {
        props.markTaskCompleted(props.index);
    }
    return (
        <div  className="task-container flex-row" >
            <div className={`task-lineover ${props.task.isComplete ? "active" : ""}`}></div>
            <span >
                {props.index}: 
            </span>
            <Card raised={true} className="task" onClick={handleTaskClick}>
                <p>{props.task.task_description}</p>
                
            </Card>
        </div>
        
    );
}
 
export default Task;