import React from 'react';
import TodoItem from './TodoItem';

export default function Todos({todos,onDelete}) {
  let mystyle={
    margin:"10px auto",
    minHeight:"50vh"
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='my-4'>Todo List</h3>
      {todos.length===0?"No Todos to display":todos.map((todo)=>{
        return(<TodoItem todo={todo} key={todo.SNo} onDelete={onDelete}/>)
      })
      }

    </div>
  )
}