import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from "./Sidebar";
import "./style.css";


// const StyledLink = styled(Link)`
//     text-decoration: none;
//     color: white;
//     &:hover {
//         color: #D3D3D3;
//     }
// `;

function Dashboard() {
  return (
    <div>
      <Container fluid>
      <Row>
      <Col xs={3} md={3} className="background_color">
        <Sidebar />
        </Col>
      
          <Col xs={9} md={9}>
            <h2>Chart 1</h2>
          </Col>
        
        </Row>
        
      </Container>
    </div>
  );
}


export default Dashboard;