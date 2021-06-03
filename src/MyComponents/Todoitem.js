import React from 'react'

export const Todoitem  = ({todo,onDelete}) => {
    return (
        <div>
            <h4 className>{todo.sno}</h4>
            <h4>{todo.title}</h4>
            <button className="btn btn-sm btn-danger my-2" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
