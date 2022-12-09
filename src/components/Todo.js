import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import {Box, Button, ButtonGroup, Checkbox, Grid, Paper} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

function Todo({todos, completeTodo, deleteTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoInput edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) => (
            <Paper className={todo.isComplete ? 'complete' : ''}
                   sx={{
                       display: 'flex',
                       justifyContent: 'space-between',
                       maxWidth: '40%',
                       backgroundColor: 'transparent',
                       margin: '15px auto'
                   }} key={index}>
                    <Checkbox onChange={() => completeTodo(todo.id)} value='checkedBox'/>
                    <Box key={todo.id} sx={{ padding: '1rem'}}>
                        {todo.text}
                    </Box>

                    <ButtonGroup variant='text' aria-label='text button group' sx={{ display: 'inline-block'}}>
                        <Button onClick={() => deleteTodo(todo.id)} color={"error"}> <DeleteOutlineIcon/> </Button>
                        <Button onClick={() => setEdit({ id: todo.id, value: todo.text})} color={'success'} > <EditIcon /> </Button>
                    </ButtonGroup>
            </Paper>
    ))
}

export default Todo;