import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        color: #D3D3D3;
    }
`;

function NavbarContainer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand >
            <StyledLink to="/">
                React-Bootstrap
            </StyledLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <StyledLink to="/dashboard">
                Dashboard
            </StyledLink>
            <StyledLink to="/login">
                Login
            </StyledLink>
            <StyledLink to="/signup">
                Sign up
            </StyledLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Pankaj Mehra</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;