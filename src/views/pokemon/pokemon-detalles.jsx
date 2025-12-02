import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";



// Vista de detalles de un Pokémon concreto.
// La URL tiene forma /pokemon/:id y aquí leemos ese :id.
const PokemonDetalles = () => {
  const { id } = useParams(); // leemos el :id de la URL

  // Estados básicos: cargando, datos del pokemon y si ha habido error.
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Petición a la API para obtener los datos completos del Pokémon.
    // Aquí sí usamos el endpoint /pokemon/id (no la species).
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container my-4">
        <p className="text-muted">Cargando datos del Pokémon...</p>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="container my-4">
        <p className="text-danger">Error cargando el Pokémon.</p>
      </div>
    );
  }

  // Formateamos algunos datos para que se vean mejor en la vista.
  const formattedId = pokemon.id.toString().padStart(3, "0");
  const alturaMetros = (pokemon.height / 10).toFixed(1); // la API viene en decímetros
  const pesoKg = (pokemon.weight / 10).toFixed(1); // la API viene en hectogramos
  
  // Pequeño mapa de nombres de los Tipos traducidos al español
  const typeNameES = {
    normal: "Normal",
    fire: "Fuego",
    water: "Agua",
    grass: "Planta",
    electric: "Eléctrico",
    ice: "Hielo",
    fighting: "Lucha",
    poison: "Veneno",
    ground: "Tierra",
    flying: "Volador",
    psychic: "Psíquico",
    bug: "Bicho",
    rock: "Roca",
    ghost: "Fantasma",
    dragon: "Dragón",
    dark: "Siniestro",
    steel: "Acero",
    fairy: "Hada",
  };

  // Pequeño mapa de colores para los tipos, usando clases de Bootstrap.
  const typeColorMap = {
    fire: "bg-danger text-light",
    water: "bg-primary text-light",
    grass: "bg-success text-light",
    electric: "bg-warning text-dark",
    bug: "bg-success text-light",
    normal: "bg-secondary text-light",
    poison: "bg-secondary text-light",      
    psychic: "bg-danger text-light",        
    rock: "bg-dark text-light",
    ground: "bg-warning text-dark",         
    fighting: "bg-danger text-light",
    ghost: "bg-dark text-light",
    ice: "bg-info text-dark",
    dragon: "bg-dark text-light",
    fairy: "bg-light text-danger",          
    steel: "bg-secondary text-light",
    flying: "bg-info text-dark",
  };


  return (
    <div>
      <div className="mb-3 back-button-wrapper">
        <Link to="/" style={{ textDecoration: "none" }}> 
          <Button type="primary">Volver al inicio</Button>
        </Link> 
      </div>

      
      <div className="container my-5">

        {/* Tarjeta centrada */}
        <div
          className="card shadow-lg border-0 w-100 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          {/* Cabecera */}
          <div className="card-header bg-white border-0 text-center pt-4">
            <h1 className="mb-1 text-capitalize font-luckiest">
              #{formattedId} - {pokemon.name}
            </h1>
          </div>

          <div className="card-body">
            <div className="row align-items-center">
              {/* Columna izquierda: sprite grande */}
              <div className="col-md-4 text-center mb-4 mb-md-0">
                <img
                  src={
                    pokemon.sprites.other["official-artwork"].front_default ||
                    pokemon.sprites.front_default
                  }
                  alt={pokemon.name}
                  className="img-fluid"
                  style={{ maxHeight: "300px" }}
                />
              </div>

              {/* Columna derecha: tipos + datos básicos */}
              <div className="col-md-8">
                <h3 className="h5 mb-2">Tipos</h3>

                <ul className="list-inline mb-3 d-flex justify-content-center gap-2">
                  {pokemon.types.map((t, index) => {
                    const typeName = t.type.name;
                    const typeClass = typeColorMap[typeName] || "bg-secondary";

                    return (
                      <li key={index} className="list-inline-item mb-2">
                        <span
                          className={`badge ${typeClass} text-capitalize px-3 py-2`}
                        >
                          {typeNameES[typeName] || typeName}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <section className="mb-5">
                  <h2 className="h4 mb-3">
                    <i className="bi bi-card-list me-2"></i>
                    Datos básicos
                  </h2>

                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Altura:</strong> {alturaMetros} m
                    </li>

                    <li className="list-group-item">
                      <strong>Peso:</strong> {pesoKg} kg
                    </li>

                    <li className="list-group-item">
                      <strong>Habilidades registradas:</strong>{" "}
                      {pokemon.abilities.length}
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
 Intento anterior usando el endpoint de "species" en lugar de "pokemon".
 Lo dejo comentado porque ahí no vienen los sprites ni algunos datos que necesito.
 Además, la estructura de la respuesta era distinta y acabé liándome más.

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((response) => {
        // Aquí intenté leer sprites, pero este endpoint no los trae.
        // response.data.sprites NO existe en species, así que daba error.
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error usando pokemon-species:", err);
        setError(true);
        setLoading(false);
      });
  }, [id]);
*/

export default PokemonDetalles;
