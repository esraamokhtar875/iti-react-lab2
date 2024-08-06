import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav'; 
// import {Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
// import { Provider } from'react-redux';   

// import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <>

    <Navbar expand="lg" className=""style={{backgroundColor:"green",color:"white"}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"white"}} >MR-MARKET</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href={"/"} style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href={"/register"} style={{color:"white"}}>Register</Nav.Link>
            <Nav.Link href ={"/login"} style={{color:"white"}}>Login</Nav.Link>
            <Nav.Link href={"/cart"} > 
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='custom-icon' width="25px" ><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
             <span className="num">{totalQuantity}</span>
</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    {/* <Navbar  id="bar"  className="bg-success " expand="lg">
      <Navbar.Brand href="#home">Mr-Market</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-white d-flex">
          <Link to = {"/"} className='link-as-text nav-link'>
            Home
          </Link>
          <Link to ={"/register"} className='link-as-text' >
           Register
          </Link>
          <Link to={"/login"} className='link-as-text'>
            Login
          </Link>
          <Link to={"/cart"} className='link-as-text'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='custom-icon' width="25px" ><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}
    </>
  );
}

export default Navigation;
