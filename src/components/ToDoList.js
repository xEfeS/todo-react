import React from 'react'
import style from './ToDoList.module.css'
import PropTypes from 'prop-types'
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    return(
        <ul className={style.listStyle}>
            { props.todos.map((todo,index) =>{
                return <ToDoItem todo={todo} key={todo.id} index={index} ChangeCheckbox={props.ChangeCheckbox}/>
            }) }
        </ul>
    )
}

ToDoList.propTypes = {
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    ChangeCheckbox:PropTypes.func.isRequired
}

export default ToDoList