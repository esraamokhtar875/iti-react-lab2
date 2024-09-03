import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav'; 
import {Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import themeContext from '../../context/themcontext';
import { useContext } from "react";
import languageContext from '../../context/langcontext';
// import { Provider } from'react-redux';   

// import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {

   const { darkMode, setDarkMode } = useContext(themeContext);
  const {language, setLanguage} = useContext(languageContext)


  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <>

    <Navbar 
       bg={darkMode ? "dark" : "green"}
        data-bs-theme={darkMode ? "dark" : "light"}
    expand="lg" className=""
    style={{backgroundColor:"green",color:"white",}}>

      <Container fluid>
        <Navbar.Brand href="#" style={{color:"white"}} >MR-MARKET</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto d-flex mr-2px mr-4px"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='nav-link mt-3' to={"/"} style={{color:"white"}}>Home</Link>
            <Link  className='nav-link mt-3' to={"/register"} style={{color:"white"}}>Register</Link>
            <Link className='nav-link mt-3' to ={"/login"} style={{color:"white"}}>Login</Link>
            <Link  className='nav-link mt-3'to={"/cart"} >    
            <div className='position-relative nav-link'>
             <svg  className='nav-link  custom-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  width="50px" ><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
             <span style={{top: 0, right: "8px", lineHeight: "12px"}} className="bg-white text-black p-2 rounded-circle position-absolute" >{totalQuantity}</span>
            </div>
          </Link>
             <div>
            <svg style={{width: "50px", height: "50px",position:'absolute', marginLeft:"-320px",marginTop:"10px", transform: `rotateZ(${darkMode ? "180deg" : "0deg"})`}} xmlns="http://www.w3.org/2000/svg" className='nav-link' viewBox="0 0 512 512" onClick={()=>setDarkMode(!darkMode)}>
            <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
           </svg>
            </div>
            
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
