import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col } from 'react-bootstrap';


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        color: #D3D3D3;
    }
`;

function DashboardPage() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
            <StyledLink to="/">
                <span>My Dashboard</span>
            </StyledLink>
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2>Chart 1</h2>
          </Col>
          <Col xs={12} md={6}>
            <h2>Chart 2</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Table</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardPage;
