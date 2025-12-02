import { Link, useLocation, NavLink } from "react-router-dom";
import PokeballIcon from "../../assets/pokeball.svg";

// Navbar principal de la aplicación.
const Navbar = () => {
  // Uso useLocation para saber en qué ruta estoy y así marcar el enlace activo.
  const location = useLocation();
  // Cuando navbar esta abierto y desplegado, cierro si le doy a un botón
  const closeMenu = () => {
  const menu = document.getElementById("navbarNav");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show"); // cierra el menú desplegado
    }
  };

  // Función sencilla para comprobar si la ruta actual coincide
  // con la ruta del enlace. Si coincide, añadimos la clase "active".
  // Al principio probé con startsWith, pero se complicaba con rutas largas
  // y para este ejercicio me vale con la igualdad exacta.
  const isActive = (path) => location.pathname === path;

  return (
    // Navbar de Bootstrap con una clase extra para el fondo "PokéApp" y posición fija.
    <nav className="navbar navbar-expand-lg navbar-light navbar-poke shadow-sm navbar-fixed">

      <div className="container">
        {/* Logo + nombre de la app.
            Antes tenía solo texto, pero lo cambié por algo un poco más llamativo. */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <div
            className="bg-white rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <img
              src={PokeballIcon}
              alt="Pokéball"
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
            />
          </div>
          <span className="font-shantell-bold" style={{ color: "#ffffffff" }}>
            PokéApp
          </span>
        </Link>

        {/* Botón hamburguesa para móviles (clásico de Bootstrap). */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación principales. */}
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink to="/" end className="nav-link font-shantell" onClick={closeMenu}>
                    Pokémon
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link font-shantell" onClick={closeMenu}>
                    Perfil
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" className="nav-link font-shantell" onClick={closeMenu}>
                    About
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link font-shantell" onClick={closeMenu}>
                    Contacto
                    </NavLink>
                </li>

            </ul>
        </div>
      </div>
    </nav>
  );
};

/* 
// Intento antiguo de navbar sin React Router.
// Lo dejo comentado porque recargaba la página entera usando <a href>,
// y para una SPA con React esto no es lo recomendable.

const NavbarSinRouter = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        PokéApp (versión antigua)
      </a>
      <a className="nav-link" href="/profile">
        Perfil
      </a>
      <a className="nav-link" href="/contact">
        Contacto
      </a>
    </nav>
  );
};
*/

export default Navbar;
