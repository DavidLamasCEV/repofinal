import { useEffect, useState } from "react";
import axios from "axios";
import profileData from "../../data/profileData";


/*
 Versión antigua del perfil pidiendo los datos a una API externa.
 La he dejado comentada porque al final he preferido tener los datos
 en un archivo local (profileData) y no depender de JSONPlaceholder.

  const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="profile-page">
        <div className="container my-4">
          <h1 className="mb-4">Mi Perfil</h1>
          <div className="card shadow-sm p-4 text-center text-muted">
            Cargando datos del entrenador...
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-page">
        <div className="container my-4">
          <h1 className="mb-4">Mi Perfil</h1>
          <div className="card shadow-sm p-4 text-center text-danger">
            Error al cargar datos del usuario.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="container my-4">
        <h1 className="mb-4">Mi Perfil</h1>

        <div className="card shadow-sm overflow-hidden">
          // Cabecera
          <div
            style={{
              height: "120px",
              background:
                "linear-gradient(90deg, rgba(239,68,68,1) 0%, rgba(220,38,38,1) 100%)",
            }}
          ></div>

          <div className="p-4 p-md-5">
            // Avatar + nombre
            <div className="d-flex flex-column align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow"
                style={{
                  width: "120px",
                  height: "120px",
                  marginTop: "-80px",
                  fontSize: "3rem",
                }}
              >
                👤
              </div>
              <h2 className="mt-3 mb-1">{user.name}</h2>
              <span className="badge bg-danger">Entrenador Pokémon</span>
            </div>

            <div className="row g-4">
              // Info contacto
              <div className="col-12">
                <div className="card bg-light h-100">
                  <div className="card-body">
                    <h3 className="h5 mb-3">Información de contacto</h3>

                    <div className="mb-2">
                      <strong>Email:</strong>
                      <br />
                      <span>{user.email}</span>
                    </div>

                    <div className="mb-2">
                      <strong>Teléfono:</strong>
                      <br />
                      <span>{user.phone}</span>
                    </div>

                    <div className="mb-2">
                      <strong>Sitio web:</strong>
                      <br />
                      <span>{user.website}</span>
                    </div>

                    <div className="mb-0">
                      <strong>Ubicación:</strong>
                      <br />
                      <span>
                        {user.address.street}, {user.address.city}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              // Stats
              <div className="col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h5 mb-3">Estadísticas de entrenador</h3>
                    <div className="row text-center">
                      <div className="col-4">
                        <div className="fw-bold fs-4">150</div>
                        <div className="text-muted small">
                          Pokémon capturados
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="fw-bold fs-4">8</div>
                        <div className="text-muted small">Medallas</div>
                      </div>
                      <div className="col-4">
                        <div className="fw-bold fs-4">42</div>
                        <div className="text-muted small">
                          Batallas ganadas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              // Organización
              <div className="col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h5 mb-2">Organización</h3>
                    <p className="mb-1">{user.company.name}</p>
                    <p className="text-muted mb-0">
                      Centro Pokémon oficial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
*/

// Versión actual del perfil usando datos locales de profileData.
const Profile = () => {
  const user = profileData;

  return (
    <div className="profile-page">
      <div className="container my-5">
        <h1 className="mb-3 my-4 font-luckiest">Mi Perfil</h1>

        <div className="card shadow-sm overflow-hidden">
          {/* Cabecera con degradado */}
          <div
            style={{
              height: "120px",
              background:
                "linear-gradient(0deg,rgba(56, 56, 168, 1) 0%, rgba(0, 212, 255, 1) 100%)"
            }}
          ></div>

          <div className="p-4 p-md-4">
            {/* Avatar + nombre */}
            <div className="d-flex flex-column align-items-center mb-4">
              <div
                className="rounded-circle bg-white shadow d-flex align-items-center justify-content-center"
                style={{
                  width: "200px",
                  marginTop: "-80px",
                  overflow: "hidden", // recorte circular
                }}
              >
                <img
                  src={user.avatar}
                  alt="Foto de perfil"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <h2 className="mt-3 mb-1 font-shantell-bold">{user.nombre}</h2>
              <span className="badge bg-danger bg-gradient mt-2 px-3 py-2 fs-6">
                {user.profesion}
              </span>
              <span className="badge bg-primary bg-gradient mt-2 px-4 py-2 fs-6">
                {user.pokemonFavorito}
              </span>
            </div>

            <div className="row g-4">
              {/* Info contacto */}
              <div className="col-12">
                <div className="card bg-light-subtle h-100">
                  <div className="card-body">
                    <h3 className="h5 mb-3">Información de contacto</h3>

                    <div className="mb-2">
                      <strong>Email:</strong>
                      <br />
                      <span>{user.email}</span>
                    </div>

                    <div className="mb-2">
                      <strong>Teléfono:</strong>
                      <br />
                      <span>{user.telefono}</span>
                    </div>

                    <div className="mb-2">
                      <strong>Sitio web:</strong>
                      <br />
                      <span>{user.web}</span>
                    </div>

                    <div className="mb-0">
                      <strong>Ubicación:</strong>
                      <br />
                      <span>{user.ubicacion}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="col-12">
                <div className="card bg-light-subtle h-100">
                  <div className="card-body">
                    <h3 className="h5 mb-3">Estadísticas de entrenador</h3>
                    <div className="row text-center">
                      <div className="col-4">
                        <div className="fw-bold fs-4">
                          {user.pokemonstotales}
                        </div>
                        <div className="text-muted small">
                          Pokémon capturados
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="fw-bold fs-4">{user.medallas}</div>
                        <div className="text-muted small">Medallas</div>
                      </div>
                      <div className="col-4">
                        <div className="fw-bold fs-4">{user.batallas}</div>
                        <div className="text-muted small">
                          Batallas ganadas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organización */}
              <div className="col-12">
                <div className="card bg-light-subtle h-100">
                  <div className="card-body">
                    <h3 className="h5 mb-2">Organización</h3>
                    <p className="mb-1">{user.empresa}</p>
                    <p className="text-muted mb-0">Centro Pokémon oficial</p>
                  </div>
                </div>
              </div>

              {/* Sobre mí */}
              <div className="col-12">
                <div className="card bg-light-subtle h-100">
                  <div className="card-body">
                    <h3 className="h5 mb-2">Sobre mí</h3>
                    <p className="mb-0">{user.frase}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
    Función que probé para formatear el teléfono, pero al final
    decidí dejar el texto tal cual viene de profileData.
    La dejo aquí por si más adelante quiero reutilizarla.

    function formatearTelefono(tlf) {
         Ejemplo: "+34600123456" -> "+34 600 123 456"
    // No está terminada y podía dar problemas con otros formatos.
    return tlf;
    }
*/

export default Profile;
