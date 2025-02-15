import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">SOBOLO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/solarsystem">SolarSystem</Nav.Link>
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="/social">The Sun</NavDropdown.Item>
                <NavDropdown.Item href="/social">Mercury</NavDropdown.Item>
                <NavDropdown.Item href="/social">Venus</NavDropdown.Item>
                <NavDropdown.Item href="/social">Earth</NavDropdown.Item>
                <NavDropdown.Item href="/social">Mars</NavDropdown.Item>
                <NavDropdown.Item href="/social">Jupiter</NavDropdown.Item>
                <NavDropdown.Item href="/social">Saturn</NavDropdown.Item>
                <NavDropdown.Item href="/social">Uranus</NavDropdown.Item>
                <NavDropdown.Item href="/social">Neptune</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
