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
              <Nav.Link href="/solarsystem">SolarSystem</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="/sun">The Sun</NavDropdown.Item>
                <NavDropdown.Item href="/mercury">Mercury</NavDropdown.Item>
                <NavDropdown.Item href="/venus">Venus</NavDropdown.Item>
                <NavDropdown.Item href="/earth">Earth</NavDropdown.Item>
                <NavDropdown.Item href="/mars">Mars</NavDropdown.Item>
                <NavDropdown.Item href="/jupiter">Jupiter</NavDropdown.Item>
                <NavDropdown.Item href="/saturn">Saturn</NavDropdown.Item>
                <NavDropdown.Item href="/uranus">Uranus</NavDropdown.Item>
                <NavDropdown.Item href="/neptune">Neptune</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
