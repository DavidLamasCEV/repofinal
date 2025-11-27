import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import PokemonCard from "../../components/pokemon-card/pokemon-card"; 

const PokemonList = () => {
// Estados principales de la página. 
// pokemons = lista básica de los 151
  const [pokemons, setPokemons] = useState([]);
// descriptions = objeto donde guardaré las descripciones en español
  const [descriptions, setDescriptions] = useState({});
// loading y error los usamos por si tarda o falla la API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

// Este useEffect se ejecuta solo 1 vez (cuando se carga la página).
// En esta petición NO viene la descripción en español, eso lo hacemos después.
  useEffect(() => {
    axios
    // Aquí pido a la API la lista básica de los 151 Pokémon.
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        // Si todo va bien, guardo en pokemons la lista que devuelve la API.
        setPokemons(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

// Cuando ya tengo la lista de pokémon, ahora sí puedo pedir las descripciones.
// Cada descripción está en otra URL distinta (pokemon-species/id).
// Para no hacer 151 peticiones una a una, uso Promise.all. (No conocía Promise.all antes, pero lo busqué y creo que es lo correcto aquí).

/*
MDN Web docs:
    Promise.all(iterable) devuelve una promesa que termina correctamente 
    cuando todas las promesas en el argumento iterable han sido concluídas con éxito, 
    o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.

    Valor devuelto: Una Promise que se cumplirá cuando todas las promesas del argumento iterable 
    hayan sido cumplidas, o bien se rechazará cuando alguna de ellas se rechace.
*/

  useEffect(() => {
    if (pokemons.length === 0) return;

    const fetchDescriptions = async () => {
      try {
        // Preparo un array de peticiones. Cada petición es "pokemon-species/id".
        // La API devuelve muchas cosas, pero aquí busco solo el texto en español.
        const requests = pokemons.map((_, index) => {
          const id = index + 1;
          return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        });

        // Esperamos a que terminen todas
        const responses = await Promise.all(requests);
        // Cuando todas las peticiones terminan, "responses" es un array, donde cada posición corresponde a un pokémon.
        // Ahora recorro ese array para sacar la descripción en español de cada uno.
        
        // Construimos un objeto { id: descripcion }
        const descs = {};
        responses.forEach((response, index) => {
          const id = index + 1;
          const entryEs = response.data.flavor_text_entries.find(
            (entry) => entry.language.name === "es"
          );

          const text = entryEs
            ? entryEs.flavor_text.replace(/\n/g, " ").replace(/\f/g, " ")
            : "Descripción no disponible en español.";

            // Guardo el texto limpio (sin saltos raros) en el objeto "descs".
          descs[id] = text;
        });

        // Ya tengo todas las descripciones juntas, así que las guardo de golpe.
        setDescriptions(descs);
      } catch (err) {
        console.error("Error cargando descripciones:", err);
      }
    };

    fetchDescriptions();
  }, [pokemons]);

  return (
    <div className="container my-5">
      <h1 className="mb-3 my-5 font-luckiest">Listado de Pokémon</h1>

      {loading && <p className="text-muted">Cargando pokémon...</p>}
      {error && <p className="text-danger">ERROR cargando la API.</p>}

      {!loading && !error && (
        <div className="row row-cols-2 row-cols-md-4 g-3">
            {/* 
                Recorro la lista de pokémon y pinto una tarjeta para cada uno 
                A cada tarjeta le paso: id, nombre y la descripción en español (si ya ha llegado).
            */} 

          {pokemons.map((pokemon, index) => {
            const id = index + 1;
            const description = descriptions[id];
            {/* La descripción puede tardar un poco, así que al principio será "undefined".
                PokemonCard ya sabe mostrar un texto de "Cargando..." si falta.
            */} 

            return (
              <div className="col font-shantell" key={id}>

                <PokemonCard
                  id={id}
                  name={pokemon.name}
                  description={description}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

/*

const PokemonList = () => {
  // estados: loading, pokemons, error
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);

  // nuevo: descripción en español por id
  const [descriptions, setDescriptions] = useState({});

  // 1) Cargar listado básico de Pokémon
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemons(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  // 2) Cuando ya tengamos los pokémon, pedir descripciones en español
  useEffect(() => {
    if (pokemons.length === 0) return;

    pokemons.forEach((_, index) => {
      const id = index + 1;

      // si ya tenemos la descripción, no repetimos la petición
      if (descriptions[id]) return;

      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((response) => {
          const entryEs = response.data.flavor_text_entries.find(
            (entry) => entry.language.name === "es"
          );

          const text = entryEs
            ? entryEs.flavor_text
                .replace(/\n/g, " ")
                .replace(/\f/g, " ")
            : "Descripción no disponible en español.";

          setDescriptions((prev) => ({
            ...prev,
            [id]: text,
          }));
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, [pokemons, descriptions]);

  return (
    <div className="container my-5">
      <h1 className="my-5">Listado de Pokémon</h1>

      {loading && <p className="text-muted">Cargando pokémon...</p>}
      {error && <p className="text-danger">ERROR cargando la API.</p>}

        {!loading && !error && (
        <div className="row row-cols-2 row-cols-md-4 g-3">
            {pokemons.map((pokemon, index) => {
            const id = index + 1;
            const description = descriptions[id];  // la que ya calculas en el useEffect

            return (
                <div className="col" key={id}>
                <PokemonCard
                    id={id}
                    name={pokemon.name}
                    description={description}
                />
                </div>
            );
            })}
        </div>
        )}

    </div>
  );
};

*/

export default PokemonList;
