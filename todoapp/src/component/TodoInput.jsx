import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TodoInput({handleSubmit,setTododata,tododata,handleEditSubmit,toggle}) {

  return (
    <div className="col-5 m-auto my-4">
        <Form className='text-center' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>TODO LIST</Form.Label>
        <Form.Control value={tododata} type="text" placeholder="Enter Todos Here" onChange={(e)=>{
            setTododata(e.target.value);
        }}/>

      </Form.Group>

      {toggle ? <Button className='me-2' variant="primary" type="submit" >
        Submit
      </Button> : <Button onClick={()=>{
        handleEditSubmit()
    }} >EditSubmit</Button>}
      
      
      <Button onClick={()=>{
        setTododata("");
    }}>Clear</Button>
    
    </Form>
    


    </div>
  )
}

export default TodoInput