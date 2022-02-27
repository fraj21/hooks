import React, { useState } from 'react';
import {Button,Modal} from 'react-bootstrap'
import {Form,} from 'react-bootstrap'

function AddNMovie({addNewMovie}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [trailer, setTrailer] = useState("");
  const [rate, setRate] = useState("");

const handleAdd=()=>{
    let x={title,description,posterUrl,trailer,rate};
    addNewMovie(x);
    handleClose();
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click here to...
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new film </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Movie Title" />
     <Form.Label>Movie description</Form.Label>
    <Form.Control type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Movie description" />
     <Form.Label>Movie posterUrl</Form.Label>
    <Form.Control type="text" onChange={(e)=>setPosterUrl(e.target.value)} placeholder="Enter Movie posterUrl" />
     <Form.Label>Movie trailer</Form.Label>
    <Form.Control type="text" onChange={(e)=>setTrailer(e.target.value)} placeholder="Enter Movie trailer" />
     <Form.Label>Movie rate</Form.Label>
    <Form.Control type="text" onChange={(e)=>setRate(e.target.value)} placeholder="Enter Movie rate " />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
}

export default AddNMovie;
