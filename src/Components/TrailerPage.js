import React from 'react';
import { useParams,useNavigate,navigate,Link } from 'react-router-dom';
import { moviesData } from '../Data';
import {Button,Icon,Label} from 'semantic-ui-react'
function TrailerPage() {
    const {Id}=useParams()
    let navigate=useNavigate()
  return (
  <div>
<iframe 
    width="500"
    height="400"
    src={moviesData.find((el)=>el.id==Id).trailer}> 
</iframe>
<p> {moviesData.find(el=>el.id==Id).description} </p>
<Link to={"/"}>
    <Button as='div' labelPosition='right' >
      <Button color='red' >
        <Icon name='home' />
        Home
      </Button>
     
    </Button>
    </Link>
  </div>);
}

export default TrailerPage;
