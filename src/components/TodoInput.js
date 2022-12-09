import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

function TodoInput (props) {
    const [todo, setTodo] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: todo
        })

        setTodo('');
    }

    return (
        <Box sx={{ textAlign: 'center'}}>
            {props.edit ? (
                <Box>
                    <TextField
                        variant='standard'
                        type='text'
                        name='todo'
                        value={todo}
                        label='Update your item'
                        onChange={handleChange}
                        ref={inputRef}
                        size='small'
                        sx={{
                            width: '37%'
                        }}
                    />
                    <Button variant='contained' onClick={handleSubmit}>
                        <SaveIcon/>
                    </Button>
                </Box>
            ) : (
                <Box>
                    <TextField
                        variant='outlined'
                        type='text'
                        name='todo'
                        value={todo}
                        label='Create a new todo'
                        onChange={handleChange}
                        ref={inputRef}
                        size='small'
                        sx={{ width: '37%'}}
                    />
                    <Button variant='contained' onClick={handleSubmit}>
                        <AddIcon/>
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default TodoInput;