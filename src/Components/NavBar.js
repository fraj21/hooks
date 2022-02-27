import React from 'react';
import {Navbar,Container,Form,FormControl,Button,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function NavBar({search ,setSearch}) {
  return (<div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <Link to='/'> Home </Link>
       <Link to='/about'> About </Link>
       <Link to='/Contact'>Contact </Link>
        
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>      
      <Form className="d-flex">
        <FormControl
        onChange={(e)=>setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>);
}

export default NavBar;
