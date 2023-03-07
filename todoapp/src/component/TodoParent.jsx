import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import axios from "axios";
import TodoOutput from './TodoOutput';

function TodoParent() {
    const [tododata,setTododata]=useState("");

    const [mainData, setMainData]=useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{

            try{
                let res = await fetch ("http://localhost:3030/todolist");
                let data = await res.json();
                console.log(data)
                setMainData(data);
            }catch(err){
                console.log("ERR",err);
            }
     
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

       let payload = {
        items : tododata,
       }

       axios.post("http://localhost:3030/todolist",payload).then(()=>{
        getData();
       });

       
       setTododata("");

    }

    const handleDelete = (id)=>{
        
        axios.delete(`http://localhost:3030/todolist/${id}`).then(()=>{
            getData();
        })
    }

  return (
    <div>
        <TodoInput handleSubmit={handleSubmit} setTododata={setTododata} tododata={tododata} />

        {
            mainData.map((ele)=>{
                return <TodoOutput key={ele.id} name={ele.items} id={ele.id} handleDelete={handleDelete} />
            })
        }
    </div>
  )
}

export default TodoParent