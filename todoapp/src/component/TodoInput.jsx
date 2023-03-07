import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TodoInput({handleSubmit,setTododata,tododata}) {

  return (
    <div className="col-5 m-auto my-5">
        <Form className='text-center' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>TODO LIST</Form.Label>
        <Form.Control value={tododata} type="text" placeholder="Enter Todos Here" onChange={(e)=>{
            setTododata(e.target.value);
        }}/>

      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    <Button onClick={()=>{
        setTododata("");
    }}>Clear</Button>


    </div>
  )
}

export default TodoInput