import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import logo from "../img/logo.png"; // Asegúrate de que esta imagen exista

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded} className="shadow">
      <Container>
        {/* Logo a la izquierda */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
          Mi Portafolio
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="navbarNav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/proyectos" onClick={() => setExpanded(false)}>Proyectos</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/contacto" onClick={() => setExpanded(false)}>Contacto</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servicios" onClick={() => setExpanded(false)}>Servicios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/otros" onClick={() => setExpanded(false)}>Otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
