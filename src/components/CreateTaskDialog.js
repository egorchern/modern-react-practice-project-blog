import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const CreateTaskDialog = (props) => {
   const [taskDescriptionValue, setTaskDescriptionValue] = useState("");
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Create new todo task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please give a concise description of the task to do
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="new_task_description"
                    label="Task description"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange = {(ev) => {setTaskDescriptionValue(ev.target.value)}}
                    value={taskDescriptionValue}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={() => {
                    props.handleTaskCreate(taskDescriptionValue)
                }}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateTaskDialog;