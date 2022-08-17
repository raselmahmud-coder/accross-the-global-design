import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Col xs md="6">
            <div className="d-flex justify-content-end">
              <input type="text" placeholder="search" />
            </div>
          </Col>
          <Col xs md="6">
            <div className="d-flex justify-content-end">
              <input type="text" placeholder="search" />
            </div>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
