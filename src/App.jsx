import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import PokemonList from "./views/pokemon/pokemon";
import PokemonDetalles from "./views/pokemon/pokemon-detalles";
import Profile from "./views/profile/profile";
import Contact from "./views/contact/contact";
import About from "./views/about/about";
import Footer from "./components/footer/footer";
import "./App.css";

// De momento las vistas Contact y About las tengo definidas aquí mismo.
// Más adelante las podría mover a su propio archivo si lo viera necesario.

const App = () => {
  // Uso useLocation solo por si en algún momento quiero hacer cosas
  // según la ruta (por ejemplo, ocultar el navbar en ciertas páginas).
  const { pathname } = useLocation();

  return (
    <div className="app-wrapper">

      {/* Navbar fijo arriba en todas las páginas.
         Podría ocultarlo en alguna ruta concreta si hiciera falta: */}
      <Navbar />

      {/* Contenedor que ocupa todo el espacio disponible.
          Así el Footer queda siempre abajo aunque haya poco contenido. */}
      <div className="content flex-grow-1">
        {/* Contenedor de rutas principal de la SPA. */}
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetalles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* Aquí podría añadir una ruta 404 en el futuro:
              <Route path="*" element={<NotFound />} />
          */}
        </Routes>
      </div>

      {/* Footer visible en todas las páginas */}
      <Footer />
    </div>
  );
};



/*
// Ejemplo de componente NotFound que probé y he dejado comentado.
// La idea sería mostrar esto cuando la ruta no exista.

function NotFound() {
  return (
    <div className="container my-5">
      <h1>Página no encontrada</h1>
      <p>La ruta que has escrito no existe. </p>
    </div>
  );
}
*/

export default App;
