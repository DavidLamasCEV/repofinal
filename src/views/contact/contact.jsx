import { useState } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const nombre = formData.get("nombre");

    setFormStatus(
      `Gracias, ${nombre || "entrenador/a"}. He recibido tu mensaje correctamente.`
    );

    event.target.reset();
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 font-luckiest">Contacto</h1>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <p className="mb-3">
            Si tienes alguna duda sobre la PokéApp, has encontrado un bug
            o quieres hacer una sugerencia, puedes escribirme con este formulario.
          </p>

          <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                placeholder="Nombre y Apellidos"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="contacto@email.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="motivo" className="form-label">
                Motivo del contacto
              </label>
              <select
                id="motivo"
                name="motivo"
                className="form-select"
                defaultValue=""
              >
                <option value="" disabled>Selecciona una opcion</option>
                <option value="duda">Problemas</option>
                <option value="sugerencia">Sugerencias</option>
                <option value="bug">Quejas</option>
                <option value="bug">Felicidades</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                className="form-control"
                rows="4"
                placeholder="Escribe aquí tu mensaje"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar mensaje
            </button>
          </form>

          {formStatus && (
            <div className="alert alert-success mt-3" role="alert">
              {formStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
