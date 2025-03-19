import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom"; // Añadido para rutas
import "./App.css";
import NavigationBar from "./components/Navbar"; // Asegura que el nombre coincida
import ImageCarousel from "./components/Carousel"; // Asegura que el nombre coincida con `Carousel.jsx`
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <NavigationBar />
      <div className="container mt-5">
        <p className="text-center">{message}</p>
        <ImageCarousel /> {/* Asegura que el nombre coincida con `Carousel.jsx` */}
        <About />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
