import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }

    const editTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }

    const deleteTodo = id => {
        const deleteArr = [...todos].filter(todo => todo.id !== id)
        setTodos(deleteArr);
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })

        setTodos(updateTodos);
    }

    return (
        <div>
            <TodoInput onSubmit={addTodo}/>

                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
        </div>
    );
}

export default TodoList;