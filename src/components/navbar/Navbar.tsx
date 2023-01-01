import styled from "styled-components";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding-left: 15px;
  &:hover {
    color: #d3d3d3;
  }
`;

const authUser = JSON.parse(localStorage.getItem("_state") as any);

function NavbarContainer() {
  return (<>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <StyledLink to="/">React-Bootstrap</StyledLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pl-3">
            <StyledLink to="/dashboard">Dashboard</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/signup">Sign up</StyledLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{authUser.firstName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container fluid>
    <Row>
      <Col xs={2}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/report">Reports</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Col>
      <Col xs={10}>
        <Dashboard />
      </Col>
    </Row>
  </Container>
  </>  
  );
}

export default NavbarContainer;
