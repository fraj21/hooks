import React from 'react';
import {Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
function MovieCard({id,title,description,posterUrl,trailer,rate}) {
 const navigate=useNavigate()
  return (<div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={posterUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text> {description} </Card.Text>
    <Card.Text> <a href={trailer} target={"_blanck"}> {trailer} </a>  </Card.Text>
    <Card.Text> {rate} </Card.Text>
    <Link to={`${id}`} >Go to description&trailer page </Link> 
  </Card.Body>
</Card>
  </div>);
}

export default MovieCard;
