import React, {useContext, useState} from 'react'
import style from './AddTodo.module.css'
import Context from "./Context";

const AddTodo = ({addTodos}) => {
    const [value, setValue] = useState('')


    function submitHandler(event) {
        event.preventDefault()


        if (value.trim()) {
            addTodos(value)
            setValue('')
        }
    }

    return (
            <form className={style.form} onSubmit={submitHandler}>
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type={'submit'}>Add</button>
            </form>
    )
}

export default AddTodo