import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding-left: 15px;
    &:hover {
        color: #D3D3D3;
    }
`;

const authUser = JSON.parse(localStorage.getItem("_state") as any);

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
          <Nav className="pl-3">
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
            Signed in as: <a href="#login">{authUser.firstName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;