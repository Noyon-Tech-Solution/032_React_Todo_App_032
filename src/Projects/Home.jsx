import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineDeleteForever } from "react-icons/md";


export default function Home() {
    const [todo, setTodo] = useState('');
    const [name, setName] = useState([]);

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!todo) return;
        setTodo('');
        if(name.includes(todo)) return;
        setName((previousTodo)=> [...previousTodo, todo])
    }

  return (
    <>
      <div>
      <form action="###" onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange}/>
        <button type='submit'>Add Todo</button>
      </form>
      </div>
      
      <div>
        {name.map((name, index)=>{
            return(
                <article key={index} style={{width:"20vw"}}>
                    <ul style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                       <li>{name}</li>
                       <div>
                       <button><FaCheckCircle /></button>
                       <button><MdOutlineDeleteForever /></button>
                       </div>
                    </ul>
                </article>
            )
        })}
      </div>
    </>
  )
}
