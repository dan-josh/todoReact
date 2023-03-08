import React from 'react'

const TodoOutput = ({name,id,handleDelete,handleEdit,index}) => {
  return (
    <div key={id} className='d-flex justify-content-around mb-3'>
        <h6>{index+1}</h6>
        <h6>{name}</h6>
        <button className='btn btn-primary' onClick={()=>{
            handleEdit(id);
        }}>Edit</button>
        <button className='btn btn-danger' onClick={()=>{
            handleDelete(id);
        }}>Delete</button>
    </div>
  )
}

export default TodoOutput


