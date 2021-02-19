import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import style from './ToDoItem.module.css'
import Context from "./Context";




const ToDoItem = ({todo, index, ChangeCheckbox}) => {
    const {removeTodo} = useContext(Context)

    return (
        <li>
            <span className={todo.completed ? 'itemCrossOut' : null}>
            <input type="checkbox" onChange={() => ChangeCheckbox(todo.id)} checked={todo.completed}/>
            <strong>{index + 1 + ' '}</strong>
                {todo.title}
            </span>

            <button onClick={()=>removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    ChangeCheckbox: PropTypes.func.isRequired
}

export default ToDoItem