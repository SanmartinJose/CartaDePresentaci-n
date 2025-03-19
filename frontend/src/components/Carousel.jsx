import { Carousel } from "react-bootstrap";
import perfil from "../img/Perfil.jpg";
import viajes from "../img/viajes.jpg";
import elegante from "../img/elegante.jpg";

function ImageCarousel() {
  return (
    <div className="d-flex justify-content-center">
      <Carousel className="w-50 shadow-lg"> {/* Reduce el tamaño del carrusel */}
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img src={perfil} alt="Foto de Perfil" style={{ width: "50%", height: "auto" }} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img src={viajes} alt="Viajar por el mundo" style={{ width: "70%", height: "auto" }} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img src={elegante} alt="Presentaciones Universidad" style={{ width: "70%", height: "auto" }} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
