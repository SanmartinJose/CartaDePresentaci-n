import { Container, Row, Col } from "react-bootstrap";
import logo from "../img/logo.png"; // Asegúrate de tener un logo en esta ruta

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Sección del Logo */}
          <Col md={4}>
            <img src={logo} alt="Logo" style={{ height: "200px" }} />
          </Col>

          {/* Sección de Contacto */}
          <Col md={4}>
            <p><i className="bi bi-telephone"></i> +593 98 421 9399</p>
            <p><i className="bi bi-envelope"></i> josesanmartin1999@hotmail.com</p>
            <p><i className="bi bi-geo-alt"></i> Quito, Ecuador</p>
          </Col>

          {/* Sección de Redes Sociales */}
          <Col md={4}>
            <a href="https://www.facebook.com/josemiguel.sanmartingalan/" className="text-light mx-2"><i className="bi bi-facebook fs-3"></i></a>
            <a href="https://www.instagram.com/jmsanmartin1999/?hl=es" className="text-light mx-2"><i className="bi bi-instagram fs-3"></i></a>
            <a href="https://www.linkedin.com/in/jose-sanmartin-ba0673266/" className="text-light mx-2"><i className="bi bi-linkedin fs-3"></i></a>
            <a href="https://github.com/SanmartinJose" className="text-light mx-2"><i className="bi bi-github fs-3"></i></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
