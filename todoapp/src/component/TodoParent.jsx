import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import axios from "axios";
import TodoOutput from './TodoOutput';


function TodoParent() {
    const [tododata,setTododata]=useState("");
    const [mainData, setMainData]=useState([]);
    const [editId, setEditId] = useState(null);
    const [toggle , setToggle] = useState(true);

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

    const handleEdit = (id)=>{
        setToggle(false);

      let data =  mainData.find((ele)=> ele.id === id);
    //   console.log(data);
    setEditId(id);

        setTododata(data.items);
    }

    const handleEditSubmit = ()=>{

        let payload = {
            items: tododata
        }
        
        axios.put(`http://localhost:3030/todolist/${editId}`, payload).then(()=>{
            getData();
        }).then(()=>{
            setTododata("");
        setToggle(true);
        })

        
    }

  return (
    <div>
        <TodoInput toggle={toggle} handleSubmit={handleSubmit} setTododata={setTododata} tododata={tododata} handleEditSubmit={handleEditSubmit} />

        {
            mainData.map((ele,index)=>{
                return <TodoOutput key={ele.id} index={index} name={ele.items} id={ele.id} handleDelete={handleDelete} handleEdit={handleEdit} />
            })
        }
    </div>
  )
}

export default TodoParent