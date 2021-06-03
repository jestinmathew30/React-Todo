
import React, { useState } from 'react';
export const Addtodo = ({addtodo}) => {
    const  [title, setTitle] = useState("");
    const submit=(e)=>{
e.preventDefault();
if(!title){
    alert("Cant be blank");
}
else{
addtodo(title);
setTitle("");
}
    }
    return (
        <div className="Container my-3 text-center">
            <h3>Add ToDo</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label ">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  
 
  <button type="submit" className="btn btn-success btn-sn">Add To Do</button>
</form>
            
        </div>
    )
}
