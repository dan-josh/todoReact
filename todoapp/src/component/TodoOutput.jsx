import React from 'react'

const TodoOutput = ({name,id,handleDelete}) => {
  return (
    <div className='d-flex justify-content-around mb-3'>
        <h6>{id}</h6>
        <h6>{name}</h6>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-danger' onClick={()=>{
            handleDelete(id);
        }}>Delete</button>
    </div>
  )
}

export default TodoOutput