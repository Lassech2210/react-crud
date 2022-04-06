import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
/* import "./Navigation.css";
 */
function MyNav() {
  const { user_id } = useParams;
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/#" className="nav-brand">React-CRUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#" className="nav-link">Home</Nav.Link>
              <Nav.Link href="user/create" className="nav-link">Create user</Nav.Link>
              {user_id != null ? <Link to="user/update/:user_id" className="nav-link">Update User</Link> : ''}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  )
}
export default MyNav;