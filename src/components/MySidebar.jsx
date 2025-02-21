import { Button, Col, Container, Form, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import Logo from "../images/logo.png";
import { HouseDoorFill } from "react-bootstrap-icons";
import { BookFill } from "react-bootstrap-icons";
import "../../src/components/MySidebar.css";

const MySidebar = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
            <Container className="flex-column align-items-start">
              <a>
                <Navbar.Brand href="index.html">
                  <img src={Logo} alt="Spotify Logo" width="131" height="40" />
                </Navbar.Brand>
              </a>

              <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" />
              <Navbar.Collapse id="navbarNavAltMarkup">
                <Nav className="me-auto" id="nav-link">
                  <Nav.Link href="#" className="d-flex align-items-center">
                    <HouseDoorFill />
                    Home
                  </Nav.Link>
                  <Nav.Link href="#" className="d-flex align-items-center">
                    <BookFill /> Your Library
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <InputGroup className="mt-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                <Button variant="outline-secondary" className="h-100" size="sm">
                  GO
                </Button>
              </InputGroup>
              <Button id="sign-up">Sign up</Button>
              <Button id="login">Login</Button>
              <span>
                <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
              </span>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default MySidebar;
