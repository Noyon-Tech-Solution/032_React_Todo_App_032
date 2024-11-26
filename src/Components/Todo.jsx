import React from 'react'
import './todo.css'
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Todo(props) {
    const {title, desc} = props.todo;
    const {id} = props;

    const handleClick = (id) => {
      props.onRevomeTodo(id)
    }

  return (
    <div className='todo_container'>
        <article className='todo_article'>
        <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        </div>
        <div>
          <i className='delet_btn' onClick={()=>{handleClick(id)}}><RiDeleteBin6Fill /></i>
        </div>
        </article>
    </div>
  )
}
