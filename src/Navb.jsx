import React, { useContext } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "./Mainpage";

function Navb() { 
  const {setsearch,search} = useContext(Context)  
  console.log(search);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Form className="ms-auto">
            <input type="text" placeholder="search" onChange={(e)=>setsearch(e.target.value)} style={{marginLeft:'30%',marginTop:'5px'}} />
            <Button variant="contained">Search</Button>
          </Form>
          <Link to="/pop">
            <Nav.Link href="/">Popular movies</Nav.Link>
          </Link>
          <Link to="/lat">
            <Nav.Link href="/">Latest Movies</Nav.Link>
          </Link>
          <Link to="/com">
            <Nav.Link href="/">Comedy Movies</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navb;
