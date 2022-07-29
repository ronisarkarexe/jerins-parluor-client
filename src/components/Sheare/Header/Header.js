import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Group 33092.png'
import useAuth from '../../../hooks/useAuth';
import './Header.css';


const Header = () => {

   const { user, handelSignOut, admin } = useAuth()

   return (
      <div className="bg-color">
         <Navbar expand="lg">
            <Container>
            <Navbar.Brand className="headerLogo" as={Link} to="/"> <img src={logo} alt="logo" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/services">Services</Nav.Link>
                  {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                  {admin && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
                  <Nav.Link onClick={handelSignOut} as={Link} to="/login">{user.email? 'LogOut' : 'Login'}</Nav.Link>
               </Nav>
            </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;