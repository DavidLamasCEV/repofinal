import { Link } from "react-router-dom";

// Componente para mostrar una tarjeta tipo "flip".
// Parte frontal = nombre + sprite
// Parte trasera = descripción en español + botón de detalles


const PokemonCard = ({ id, name, description }) => {
  // URL del sprite oficial del Pokémon.
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="flip flip-vertical pokecard">
      {/* 
            FRONT
            Parte frontal de la tarjeta (cara visible antes del hover)
      */}
      
      <div className="front pokecard-front">
        <div className="pokecard-header">
          <span className="pokecard-id">#{id}</span>
          <span className="pokecard-name text-capitalize">{name}</span>
        </div>

        <div className="pokecard-image-wrapper">
          <img src={spriteUrl} alt={name} className="pokecard-image" />
        </div>
      </div>

        {/* 
            BACK
            Parte trasera de la tarjeta. Solo se ve al pasar el ratón (flip).
        */}
      <div className="back pokecard-back">
        <p className="pokecard-description"> {/* Si description no existe aún, muestro un texto provisional.*/}
          {description
            ? description
            : "Cargando descripción en español..."}
        </p>

        <Link
          to={`/pokemon/${id}`}
          className="btn btn-sm btn-primary mt-2"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
