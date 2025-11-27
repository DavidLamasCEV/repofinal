import { Link, useLocation, NavLink } from "react-router-dom";

// Navbar principal de la aplicación.
// Uso useLocation para saber en qué ruta estoy y así marcar el enlace activo.
const Navbar = () => {
  const location = useLocation();

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
            style={{ width: "36px", height: "36px" }}
          >
            <span style={{ fontSize: "1.4rem" }}>⚡</span>
          </div>
          <span style={{ color: "#ffffffff" }}>PokéApp</span>
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
                    <NavLink to="/" end className="nav-link font-shantell">
                    Pokémon
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link font-shantell">
                    Perfil
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link font-shantell">
                    Contacto
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" className="nav-link font-shantell">
                    About
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
