import React, {useState, useEffect} from 'react'
import ToDoList from "./components/ToDoList";
import Context from './components/Context'
import AddTodo from "./components/AddTodo";

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
            })
    }, [])

    const
        ChangeCheckbox = (id) => {
            setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }))
        }


    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodos(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className={'wrapper'}>
                <h1>React TODO</h1>
                <AddTodo addTodos={addTodos}/>
                {todos.length ?
                    <ToDoList todos={todos} ChangeCheckbox={ChangeCheckbox}/>
                    : <p>No todos</p>
                }
            </div>
        </Context.Provider>
    );
}

export default App;
