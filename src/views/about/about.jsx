import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function About() {
  return (
    <div className="container my-5">
      {/* Hero / Introducción */}
      <div className="p-5 mb-4 text-center">
        <h1 className="mb-3 font-luckiest">Sobre la PokéApp</h1>
        <p className="lead">
          Proyecto realizado para practicar React, peticiones a APIs, rutas y componentes reutilizables usando PokéAPI.
        </p>
      </div>

      {/* Estructura */}
      <section className="mb-5">
        <h2 className="h4 mb-3"><i className="bi bi-tools me-2"></i>Tecnologías utilizadas</h2>
        <ul className="list-group">
            <li className="list-group-item">
            <strong>React:</strong> Para construir la interfaz
            </li>

            <li className="list-group-item">
            <strong>Vite:</strong> Recarga rápida del proyecto
            </li>

            <li className="list-group-item">
            <strong>React Router DOM:</strong> Gestión de rutas sin recargar toda la app
            </li>

            <li className="list-group-item">
            <strong>Axios:</strong> Cliente HTTP para hacer peticiones
            </li>

            <li className="list-group-item">
            <strong>Bootstrap:</strong> Maquetación responsive
            </li>

            <li className="list-group-item">
            <strong>PokéAPI:</strong> Datos de los Pokémon utilizados
            </li>

        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3"><i className="bi bi-diagram-3 me-2"></i>Estructura del proyecto</h2>
        <ul className="list-group">
            <li className="list-group-item">
            <strong>Listado de Pokémon</strong> en tarjetas con datos de PokéAPI.
            </li>

            <li className="list-group-item">
            <strong>Página de detalle por ID de Pokémon.</strong>
            </li>

            <li className="list-group-item">
            <strong>Perfil simulado </strong> con props y estados.
            </li>

            <li className="list-group-item">
            <strong>Formulario de contacto</strong> con maquetación Bootstrap y confirmación.
            </li>

            <li className="list-group-item">
            <strong>Página "About" </strong> con explicaciones del proyecto.
            </li>

        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3"><i className="bi bi-layout-text-sidebar-reverse me-2"></i>Decisiones de diseño</h2>
        <div className="row row-cols-md-1">
          <div className="col"><div className="alert alert-success about-list-bold">Navegación fija superior.</div></div>
          <div className="col"><div className="alert alert-success about-list-bold">Efecto de giro en tarjetas.</div></div>
          <div className="col"><div className="alert alert-success about-list-bold">Diseño responsivo con Bootstrap.</div></div>
          <div className="col"><div className="alert alert-success about-list-bold">Separación de componentes reutilizables.</div></div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3"><i className="bi bi-lightbulb me-2"></i>Líneas de mejora</h2>
        <div className="row row-cols-md-1">
          <div className="col"><div className="alert alert-warning about-list-bold">Filtros y búsqueda para los Pokémon.</div></div>
          <div className="col"><div className="alert alert-warning about-list-bold">Favoritos con almacenamiento local.</div></div>
          <div className="col"><div className="alert alert-warning about-list-bold">Accesibilidad (textos alternativos, navegación con teclado).</div></div>
          <div className="col"><div className="alert alert-warning about-list-bold">Interfaz multilenguaje.</div></div>
        </div>
      </section>   
    </div>
  );
}

export default About;
